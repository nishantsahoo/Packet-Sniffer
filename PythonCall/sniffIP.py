import requests
r = requests.post("http://localhost:9000/sniff/ippack", data={'version': 'IPv4', 'ip_hlen': 10, 'ttl': 15, 'protocol': 'Anything', 'source_address': '192.17.16.1', 'destination_address': '192.15.15.1'})
print r.status_code, r.reason
contents = requests.get("http://localhost:9000/sniff/ippack")
print contents
for each in contents:
	print each