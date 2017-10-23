# Packet-Sniffer

Prerequisites: NodeJs, MySQL

Use the python scripts in the folder "PythonCall" to make use of the APIs which store the required data into the database. 
sniff.py is used to store the value of bandwidth in the database
sniffIP.py is used to store the values in an IP header.

To execute the project:
1. Create a database named sniffme in MySQL
SQL> create database sniffme;

2. npm install
(install all the dependencies)

3. npm start
(open localhost:9000 on the browser)




Explaination of unpack function in Sniffer.py


IP Header = 
struct ipheader {
 unsigned char ip_hl:4, ip_v:4; /* this means that each member is 4 bits */
 unsigned char ip_tos;
 unsigned short int ip_len;
 unsigned short int ip_id;
 unsigned short int ip_off;
 unsigned char ip_ttl;
 unsigned char ip_p;
 unsigned short int ip_sum;
 unsigned int ip_src;
 unsigned int ip_dst;
}; 

For an eg: unsigned char are represented as 'B' and unsigned int is represented by 'I'. Now we can use this method to know what format specifiers should be used in struct.unpack() to get the field values of a IP header. In case of a IP header it becomes as following:
struct.unpack('!BBHHHBBHII')

We have used struct.unpack('!BBHHHBBH4s4s');


