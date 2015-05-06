# emailjs-cli

send emails, html and attachments (files, streams and strings) from your cli to any smtp server

## INSTALLING

	npm install emailjs-cli -g

## FEATURES
 Based on [emailjs](https://github.com/eleith/emailjs) it provides following features:
 - works with SSL and TLS smtp servers 
 - supports smtp authentication (PLAIN, LOGIN, CRAMMD5)
 - emails are queued and the queue is sent asynchronously
 - supports sending html emails and emails with multiple attachments (MIME)
 - attachments can be added as strings, streams or file paths
 - supports utf-8 headers and body

## REQUIRES
 - auth access to an SMTP Server
 - if your service (ex: gmail) uses two-step authentication, use an application specific password

## EXAMPLE USAGE

```bash
$ emailjs -s "Subject" -t "Full text" -to "A Person <sender@superrito.com>" -from "A Person <recipient@superrito.com>; Another Person <recipient2@superrito.com>" --host "smtp.gmail.com" --ssl
```
	
## Authors

martinheidegger

## Testing

	npm install -d
	npm test

## Contributions

issues and pull requests are welcome
