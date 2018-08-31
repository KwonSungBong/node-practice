# Koa 2 Restful Boilerplate

curl -d 'password=password' http://localhost:3000/api/authenticate

curl -H "Authorization: Bearer {token}" -H "Content-Type: application/json" -X POST -d '{"name":"test","totalPopulation":10,"country":"country"}' http://localhost:3000/api/cities

curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE1MzU2OTI2MDB9.3ykgqtCSG3SyQg8ZwHzCZ_taPZSEzDH2PdwPnlWJ8Mk" -H "Content-Type: application/json" -X POST -d '{"name":"test","totalPopulation":10,"country":"country"}' http://localhost:3000/api/cities





