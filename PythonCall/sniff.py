import requests
r = requests.post("http://localhost:9000/sniff/bandwidth", data={'bandwidth': 230})
print r.status_code, r.reason
contents = requests.get("http://localhost:9000/sniff/bandwidth")
print contents
for each in contents:
	print each
