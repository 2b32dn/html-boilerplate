all: run

install: 
	npm install nodemon -g
	npm install express
	npm install

stop:
	killall nodemon

run: 
	npm start &
	sleep 10 
	open http://localhost:8888/