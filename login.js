const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req,res) => {
	const{pathname,query} = url.parse(req.url,true);
	if(pathname === '/'){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(`
				<html>
				<body>
				<h2>Login</h2>
				<form method = "POST" action= "/login">
				<div>
				<label for = "username">Username:</label>
				<input type = "text" id="username" name="username" required>
				</div>
				<div>
				<label for = "password">Password:</label>
				<input type = "password" id="password" name="password" required>
				</div>
				<button type = "submit">Log in</button>
				</form>
				</body>
				</html>
			`);
		res.end();	
	}
	else if(pathname==='/login' && req.method==='POST'){
		let body = '';
		req.on('data',chunk => {
			body += chunk.toString();
		});
		req.on('end',() => {
			const formData = qs.parse(body);
			const {username,password} = formData;
			
			if(username==='solace' && password === 'password'){
				console.log('Welcome');
				res.writeHead(200,{'Content-Type': 'text/plain'});
				res.end('Welcome');
			}
			else{
				res.writeHead(401,{'Content-Type':'text/plain'});
				res.end('Invalid  username or password');
			}
		});
	}
	else{
		res.writeHead(404,{'Content-Type':'text/plain'});
		res.end('Not Found');
	}
});

server.listen(3000, () => {
	console.log('Server is running at http://localhost:3000/');
});