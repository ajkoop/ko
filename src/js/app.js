var ContactForm = React.createClass({

	getInitialState: function() {
		return {name: '', email: '', message: ''};
	},
	
	componentDidMount: function() {
		$(".contactForm").find(".alert").hide();
	},

	handleNameChange: function(e) {
		this.setState({name: e.target.value});
	},

	handleEmailChange: function(e) {
		this.setState({email: e.target.value});
	},

	handleMessageChange: function(e) {
		this.setState({message: e.target.value});
	},

	tooltip : function(el, msg) {
		$(el).tooltip({ 'title': msg, 'placement':'bottom'});
		$(el).val('');
		$(el).focus();
	},

	validate : function() {

		var name = this.state.name.trim();
		var email = this.state.email.trim();
		var message = this.state.message.trim();
		
		$(".name-input").tooltip('destroy');
		$(".email-input").tooltip('destroy');
		$(".message-input").tooltip('destroy');

		if (!name) {
			this.tooltip(".name-input", "Please enter your name");
			return false;
		}

		if (!email) {
			this.tooltip(".email-input", "Please enter your email");
			return false;
		}

		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!filter.test(email)) {
			this.tooltip(".email-input", "Please enter a valid email address");
			return false;
		}

		if (!message) {
			this.tooltip(".message-input", "Please enter your message");
			return false;
		}

		return true;
	},

	showAlert : function(msg) {
		var el = $(".contactForm").find(".alert");
		el.hide();
		el.html(msg);
		el.fadeIn().delay(2000).fadeOut();
	},

	handleSubmit: function(e) {
		e.preventDefault();
		
		if (this.validate()) {

			var o = {
				name    : this.state.name.trim(),
				email   : this.state.email.trim(),
				message : this.state.message.trim()
			};

			$.ajax({
				url: this.props.url,
				dataType: 'json',
				type: 'POST',
				data: o,
				success: function(data) {
					//
				}.bind(this),
				error: function(xhr, status, err) {
					this.showAlert("Something happend, please try again");
					console.error(this.props.url, status, err.toString());
				}.bind(this)
		    });

			this.showAlert("Your message was sent successfully");
		    this.setState({name: '', email: '', message: ''});

		}

	},

	render: function() {
	    return (
			<form className="contactForm" onSubmit={this.handleSubmit}>
				<div className="form-group">
				    <input type="text" className="form-control name-input" id="name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange} />
				</div>
				<div className="form-group">
				    <input type="email" className="form-control email-input" id="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
				</div>
				<div className="form-group">
				    <textarea className="form-control message-input" rows="3" id="Message" placeholder="Message" value={this.state.message} onChange={this.handleMessageChange}></textarea>
				</div>
				<div className="form-group alert"></div>
				<div className="form-group">
					<button type="submit" className="btn btn-default" value="Post">Send</button>
				</div>
			</form>
	    );
	}

});

ReactDOM.render(
  <ContactForm url="/api/message" />,
  document.getElementById('exp')
);