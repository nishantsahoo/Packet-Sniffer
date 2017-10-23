#Packet sniffer in python for Linux
#Sniffs only incoming TCP packet

import socket, sys
from struct import *
import sqlite3
import requests
connection=sqlite3.connect("Packetdata.db")


#create an INET, STREAMing socket
try:
	s = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_TCP)
	#s = socket.socket(socket.AF_INET, socket.SOCK_RAW, 0)
except socket.error , msg:
	print 'Socket could not be created. Error Code : ' + str(msg[0]) + ' Message ' + msg[1]
	sys.exit()

# receive a packet
while True:
	packet = s.recvfrom(65665)
	print(packet)
	#packet string from tuple
	packet = packet[0]
	
	#take first 20 characters for the ip header
	ip_header = packet[0:20]
	
	#unpacking part
	iph = unpack('!BBHHHBBH4s4s' , ip_header)
	
	version_ihl = iph[0]
	version = version_ihl >> 4
	ihl = version_ihl & 0xF
	
	iph_length = ihl * 4
	
	ttl = iph[5]
	protocol = iph[6]
	s_addr = socket.inet_ntoa(iph[8]);
	
	d_addr = socket.inet_ntoa(iph[9]);
	
	
	print ('Version : ' + str(version) + ' IP Header Length : ' + str(ihl) + ' TTL : ' + str(ttl) + ' Protocol : ' + str(protocol) + ' Source Address : ' + str(s_addr) + ' Destination Address : ' + str(d_addr))
			
	
	
	
	r = requests.post("http://localhost:9000/sniff/ippack", data={'version': str(version), 'ip_hlen': ihl, 'ttl': ttl, 'protocol': str(protocol), 'source_address': str(s_addr), 'destination_address': str(d_addr)})
	
	print r.status_code, r.reason
	contents = requests.get("http://localhost:9000/sniff/ippack")
	print contents
	for each in contents:
		print each
