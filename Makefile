run-dev:
	docker-compose -f docker-compose-dev.yml up 
build-prod:
	docker build -f Dockerfile.prod -t eld11ar/green-api .
run-prod:
	docker-compose -f docker-compose-prod.yml up