<%
	nome		= Replace(Trim(Request.Form("nome")),"'","´")
	email		= Replace(Trim(Request.Form("email")),"'","")
	telefone	= Replace(Trim(Request.Form("telefone")),"'","")
	mensagem	= Replace(Trim(Request.Form("mensagem")),"'","")
	assunto		= Replace(Trim(Request.Form("assunto")),"'","")
	
	txtEmail = "<b>Nome:</b>" & nome & "<br />"
	txtEmail = txtEmail & "<b>E-mail:</b>" & email & "<br />"
	txtEmail = txtEmail & "<b>Telefone:</b>" & telefone & "<br />"
	txtEmail = txtEmail & "<b>Mensagem:</b>" & mensagem & "<br />"
	txtEmail = txtEmail & "<b>Hora da mensagem:</b>" & now() & "<br />"
	txtEmail = txtEmail & "<b>IP da mensagem:</b>" & Request.ServerVariables("REMOTE_ADDR") & "<br />"
	txtEmail = txtEmail & "<b>User-Agent:</b>" & Request.ServerVariables("HTTP_USER_AGENT") & "<br />"

	destinatario = "SAC <sac@editorainovacao.com.br>"

	if assunto = "0" then
		destinatario = "Comercial <comercial@editorainovacao.com.br>"
	End if
	
	Set objmail = Server.CreateObject("CDONTS.NewMail")
		objmail.from = nome & "<" & email & ">"
		objmail.to = destinatario
		objmail.subject = "Fale Conosco | Editora Inovação"
		objMail.BodyFormat = 0
		objMail.MailFormat = 0
		objmail.body = txtEmail
		objmail.send
	Set objmail = Nothing
	
	Response.Redirect("https://www.editorainovacao.com.br/?confirmado")
%>
