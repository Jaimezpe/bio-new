@echo off
:: Cambia DNS IPv4 en la interfaz llamada "Wi-Fi" y "Ethernet". Ajusta nombres si es necesario.
netsh interface ip set dns name="Wi-Fi" static 192.168.1.84
netsh interface ip add dns name="Wi-Fi" 8.8.8.8 index=2

netsh interface ip set dns name="Ethernet" static 192.168.1.84
netsh interface ip add dns name="Ethernet" 8.8.8.8 index=2

ipconfig /flushdns
echo DNS cambiada a 192.168.1.84
pause