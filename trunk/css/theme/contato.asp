	<%
	nome		= Replace(Trim(Request.Form("fName")),"'","´")
	email		= Replace(Trim(Request.Form("fEmail")),"'","")
	mensagem	= Replace(Trim(Request.Form("fMensagem")),"'","")
	
	txtEmail = "<b>Nome:</b>" & nome & "<br />"
	txtEmail = txtEmail & "<b>E-mail:</b>" & email & "<br />"
	txtEmail = txtEmail & "<b>Mensagem:</b>" & mensagem & "<br />"
	txtEmail = txtEmail & "<b>Hora da mensagem:</b>" & now() & "<br />"
	txtEmail = txtEmail & "<b>IP da mensagem:</b>" & Request.ServerVariables("REMOTE_ADDR") & "<br />"
	txtEmail = txtEmail & "<b>User-Agent:</b>" & Request.ServerVariables("HTTP_USER_AGENT") & "<br />"
	
	
	Set objmail = Server.CreateObject("CDONTS.NewMail")
		objmail.from = nome & "<" & email & ">"
		objmail.to = "Abner Simões <abner.simoes@hotmail.com>"
		objmail.subject = "Portfólio | Contato"
		objMail.BodyFormat = 0
		objMail.MailFormat = 0
		objmail.body = txtEmail
		objmail.send
	Set objmail = Nothing
	
	Response.Redirect("http://www.abnersimoes.com.br/")
%>