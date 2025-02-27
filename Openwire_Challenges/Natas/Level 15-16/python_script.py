ASSIGNMENT 1
import requests

url = "https://jsonplaceholder.typicode.com/todos/1"
response = requests.get(url)
print("status code:", response.status_code)
print("Response body: ", response.json())


ASSIGNMENT 2
import requests

url = "https://httpbin.org/post"
data = {"username": "test", "password": "pass123"}
response = requests.post(url, data = data)
print("Server JSON response:", response.json())

ASSIGNMENT 3
import requests

url = "https://httpbin.org/headers"
response = requests.get(url)
print("Request headers:", response.request.headers)
print("Response headers:", response.headers)


