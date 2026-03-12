const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const cols = Math.floor(canvas.width / 18);
const drops = Array(cols).fill(1);
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*<>{}[]|アイウエオカキクケコサシスセソタチツテト';
function drawMatrix() {
  ctx.fillStyle = 'rgba(0,0,0,0.05)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = '#8b0000';
  ctx.font = '14px Share Tech Mono';
  drops.forEach((d,i) => {
    ctx.fillText(chars[Math.floor(Math.random()*chars.length)], i*18, d*18);
    if(d*18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  });
}
setInterval(drawMatrix, 50);
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// =============================================
// DORKS DATABASE — 500+ DORKS
// =============================================
const DORKS = [

// ═══════════════════════════════════════
// CATEGORY: LOGIN — PANELES DE ACCESO
// ═══════════════════════════════════════
{cat:'login',q:'inurl:"/admin/login" intitle:"admin"',d:'Paneles de administración con login expuesto, primer paso para ataques de fuerza bruta.'},
{cat:'login',q:'inurl:"/wp-login.php"',d:'Página de login de WordPress. Vulnerable a fuerza bruta y XML-RPC attacks.'},
{cat:'login',q:'inurl:"/administrator/index.php" intitle:"Joomla"',d:'Panel de administración de Joomla CMS, comúnmente atacado con credenciales por defecto.'},
{cat:'login',q:'inurl:"/user/login" intitle:"Drupal"',d:'Login de Drupal CMS. Permite intentos de autenticación con usuarios conocidos.'},
{cat:'login',q:'intitle:"phpMyAdmin" inurl:"/phpmyadmin/"',d:'Panel phpMyAdmin accesible públicamente. Administración de bases de datos MySQL sin restricción de IP.'},
{cat:'login',q:'inurl:"/panel" intitle:"control panel" intext:"password"',d:'Paneles de control genéricos con formularios de autenticación expuestos.'},
{cat:'login',q:'intitle:"Webmin" inurl:":10000"',d:'Panel de administración Webmin expuesto. Controla completamente un servidor Linux/Unix.'},
{cat:'login',q:'inurl:":8080/manager/html" intitle:"Tomcat"',d:'Manager de Apache Tomcat expuesto, permite desplegar aplicaciones WAR maliciosas.'},
{cat:'login',q:'intitle:"cPanel" inurl:":2082" OR inurl:":2083"',d:'Panel de hosting cPanel expuesto, acceso completo a sitios web, correos y bases de datos.'},
{cat:'login',q:'intitle:"Plesk" inurl:":8443" OR inurl:":8880"',d:'Panel Plesk de hosting expuesto con acceso a dominios, emails y gestión del servidor.'},
{cat:'login',q:'inurl:"/remote/login" intitle:"FortiGate"',d:'Portal de login de Fortinet FortiGate VPN, objetivo frecuente de ataques APT.'},
{cat:'login',q:'inurl:"/dana-na/auth/url_default/welcome.cgi"',d:'Portal SSL VPN de Pulse Secure, afectado por vulnerabilidades críticas CVE-2019-11510.'},
{cat:'login',q:'inurl:"/citrix/XenApp" OR inurl:"/Citrix/StoreWeb"',d:'Portales Citrix expuestos, objetivo de ataques para acceso a entornos corporativos.'},
{cat:'login',q:'intitle:"RouterOS" inurl:"/winbox/" OR inurl:":8291"',d:'Routers MikroTik con Winbox expuesto, frecuentemente mal configurados con credenciales default.'},
{cat:'login',q:'inurl:"/login.aspx" intitle:"SharePoint"',d:'Portales SharePoint de Microsoft expuestos con autenticación accesible.'},
{cat:'login',q:'intitle:"Grafana" inurl:"/login"',d:'Paneles Grafana de monitoreo expuestos públicamente, credenciales default admin/admin.'},
{cat:'login',q:'intitle:"Kibana" inurl:":5601"',d:'Kibana sin autenticación expuesto, acceso completo a datos de Elasticsearch.'},
{cat:'login',q:'inurl:"/jenkins" intitle:"Dashboard [Jenkins]"',d:'Servidores Jenkins de CI/CD sin autenticación que permiten ejecución remota de código.'},
{cat:'login',q:'intitle:"Roundcube Webmail" inurl:"/webmail/"',d:'Webmail Roundcube expuesto, acceso a correos corporativos con credenciales comprometidas.'},
{cat:'login',q:'intitle:"ownCloud" OR intitle:"Nextcloud" inurl:"/login"',d:'Servidores de almacenamiento en la nube privados con paneles de login accesibles.'},
{cat:'login',q:'inurl:"/admin.php" intext:"username" intext:"password"',d:'Paneles admin PHP genéricos con formularios de autenticación básicos.'},
{cat:'login',q:'intitle:"Zimbra Web Client" inurl:"/zimbra/"',d:'Cliente webmail Zimbra corporativo con acceso a emails y calendarios empresariales.'},
{cat:'login',q:'inurl:":9090" intitle:"Cockpit"',d:'Cockpit - panel de administración de servidores Linux moderno, expuesto sin restricciones.'},
{cat:'login',q:'intitle:"SonicWALL" inurl:"auth.html"',d:'Firewall SonicWALL con portal de autenticación accesible desde Internet.'},
{cat:'login',q:'inurl:"/remote/logincheck" intitle:"SSL-VPN"',d:'Portales SSL VPN genéricos de diferentes fabricantes accesibles públicamente.'},
{cat:'login',q:'intitle:"PRTG Network Monitor" inurl:"/public/"',d:'PRTG de monitoreo de red expuesto. Credenciales default: prtgadmin/prtgadmin.'},
{cat:'login',q:'inurl:":8888" intitle:"Jupyter Notebook"',d:'Jupyter Notebooks sin contraseña expuestos, permiten ejecución de código Python arbitrario.'},
{cat:'login',q:'intitle:"OpenVPN Access Server" inurl:"/admin/"',d:'Panel admin de OpenVPN Access Server expuesto para gestión de usuarios VPN.'},
{cat:'login',q:'inurl:"/wp-login.php" intext:"Too many failed login"',d:'WordPress con mensaje de límite de intentos fallidos, confirma existencia del panel.'},
// ═══════════════════════════════════════
// CATEGORY: VULN — VULNERABILIDADES
// ═══════════════════════════════════════
{cat:'vuln',q:'inurl:".php?id=" intext:"mysql_fetch" OR intext:"You have an error in your SQL"',d:'Páginas PHP vulnerables a SQL Injection con mensajes de error MySQL visibles.'},
{cat:'vuln',q:'inurl:"?id=" intext:"Warning: mysqli" site:.com',d:'Aplicaciones PHP con errores de MySQLi expuestos, indicativo de SQL Injection.'},
{cat:'vuln',q:'intitle:"Error" intext:"Stack trace" intext:"Exception"',d:'Aplicaciones web con stack traces expuestos que revelan rutas internas y tecnologías.'},
{cat:'vuln',q:'inurl:"/etc/passwd" filetype:php',d:'Scripts PHP con inclusión de archivos locales (LFI), permiten leer /etc/passwd.'},
{cat:'vuln',q:'inurl:"?page=" intext:"include()" intext:"Warning"',d:'Vulnerabilidad de File Inclusion en PHP con errores de include visibles.'},
{cat:'vuln',q:'intext:"sql syntax" intext:"near" inurl:".asp"',d:'Páginas ASP con errores SQL visibles, indicativo de inyección SQL clásica.'},
{cat:'vuln',q:'filetype:php inurl:"shell" intitle:"c99"',d:'Webshells C99 accesibles públicamente en servidores comprometidos.'},
{cat:'vuln',q:'filetype:php intitle:"b374k" OR intitle:"WSO"',d:'Webshells WSO y B374K en servidores hackeados, permiten control total del servidor.'},
{cat:'vuln',q:'inurl:"/cgi-bin/bash" OR inurl:"/cgi-bin/sh"',d:'Servidores vulnerables a Shellshock (CVE-2014-6271) con bash en CGI expuesto.'},
{cat:'vuln',q:'intext:"Uncaught Error" intext:"in /var/www/" filetype:php',d:'Errores PHP con rutas absolutas del servidor expuestas.'},
{cat:'vuln',q:'inurl:"/.git/config" -github.com',d:'Configuración Git expuesta en servidor de producción, revela repositorios internos.'},
{cat:'vuln',q:'inurl:"/.svn/entries"',d:'Repositorios Subversion expuestos, permite descargar código fuente completo.'},
{cat:'vuln',q:'inurl:"/phpinfo.php" intitle:"phpinfo()"',d:'Página phpinfo() expuesta con información completa: versión PHP, módulos, variables de entorno, rutas.'},
{cat:'vuln',q:'intext:"Warning: include_once(" intext:"failed to open stream"',d:'Errores de inclusión PHP que revelan rutas del sistema de archivos del servidor.'},
{cat:'vuln',q:'inurl:"/actuator" intitle:"Spring Boot"',d:'Spring Boot Actuator sin seguridad expuesto, revela endpoints internos y permite RCE en versiones antiguas.'},
{cat:'vuln',q:'inurl:"/solr/admin" intitle:"Solr Admin"',d:'Apache Solr sin autenticación expuesto, permite lectura/escritura de todos los índices.'},
{cat:'vuln',q:'intitle:"Hadoop" inurl:":50070" OR inurl:":50030"',d:'Hadoop NameNode/JobTracker expuestos sin autenticación, acceso a todos los datos HDFS.'},
{cat:'vuln',q:'inurl:":9200/_cat/indices" OR inurl:":9200/_nodes"',d:'Elasticsearch sin autenticación expuesto, acceso total a todos los índices y datos.'},
{cat:'vuln',q:'inurl:":6379" intitle:"" intext:"PONG"',d:'Redis sin autenticación accesible, permite leer/escribir todos los datos en memoria.'},
{cat:'vuln',q:'inurl:":27017" intitle:"MongoDB"',d:'MongoDB sin autenticación expuesto a Internet, acceso total a todas las bases de datos.'},
{cat:'vuln',q:'inurl:"struts2" inurl:".action" intext:"Struts"',d:'Apache Struts2 expuesto, potencialmente vulnerable a RCE (CVE-2017-5638, CVE-2018-11776).'},
{cat:'vuln',q:'inurl:".jsp" intext:"<error>" intext:"exception"',d:'Aplicaciones Java/JSP con excepciones expuestas que revelan stack traces y rutas.'},
{cat:'vuln',q:'filetype:asp inurl:"upload" intext:"success"',d:'Formularios de carga de archivos ASP sin restricciones de tipo de archivo.'},
{cat:'vuln',q:'inurl:"/xmlrpc.php" intitle:"xmlrpc"',d:'XML-RPC de WordPress habilitado, vulnerable a ataques de fuerza bruta y DDoS.'},
{cat:'vuln',q:'inurl:"eval(" filetype:php intext:"base64_decode"',d:'Código PHP ofuscado con eval/base64_decode, posible backdoor o webshell oculto.'},
{cat:'vuln',q:'inurl:"/cgi-bin/" filetype:cgi inurl:"?" intext:"env"',d:'Scripts CGI potencialmente vulnerables que exponen variables de entorno del servidor.'},
{cat:'vuln',q:'intext:"Fatal error" inurl:".php" intext:"on line"',d:'Errores fatales PHP con número de línea y ruta del archivo expuestos.'},
{cat:'vuln',q:'inurl:"/axis2/axis2-admin/" intitle:"Axis2"',d:'Apache Axis2 admin expuesto, permite desplegar servicios web maliciosos con credenciales default.'},
{cat:'vuln',q:'inurl:"/status" intitle:"Apache Status"',d:'Página de estado de Apache expuesta con información de procesos, IPs y peticiones activas.'},
{cat:'vuln',q:'inurl:"/server-info" intitle:"Apache Server Information"',d:'Información detallada del servidor Apache: módulos cargados, directivas de configuración.'},
// ═══════════════════════════════════════
// CATEGORY: DATABASE — BASES DE DATOS
// ═══════════════════════════════════════
{cat:'database',q:'intext:"sql server" intitle:"error" inurl:".asp"',d:'Errores de SQL Server expuestos en aplicaciones ASP que facilitan la inyección SQL.'},
{cat:'database',q:'filetype:sql "CREATE TABLE" "INSERT INTO" "password"',d:'Scripts SQL completos con estructura de tablas y datos de usuarios con contraseñas.'},
{cat:'database',q:'inurl:"phpmyadmin" intitle:"phpMyAdmin" intext:"No password"',d:'phpMyAdmin accesible sin contraseña configurada, acceso total a la base de datos.'},
{cat:'database',q:'inurl:":5432" OR inurl:":5432/pgAdmin" intitle:"pgAdmin"',d:'pgAdmin de PostgreSQL expuesto, gestión completa de bases de datos PostgreSQL.'},
{cat:'database',q:'inurl:"/adminer.php" intitle:"Adminer"',d:'Adminer (database manager) expuesto públicamente, soporta MySQL, PostgreSQL, SQLite, MongoDB.'},
{cat:'database',q:'filetype:sql intext:"mysqldump" intext:"Dump of table"',d:'Dumps de MySQL completos con toda la estructura y datos de la base de datos.'},
{cat:'database',q:'intext:"ORA-01756" OR intext:"ORA-00933" inurl:".asp" OR inurl:".php"',d:'Errores Oracle Database expuestos que confirman vulnerabilidad a SQL Injection.'},
{cat:'database',q:'intitle:"MongoDB" inurl:":28017" OR inurl:":27017/db"',d:'MongoDB con interfaz web HTTP expuesta, permite consultas sin autenticación.'},
{cat:'database',q:'inurl:":8086/query" intitle:"InfluxDB"',d:'InfluxDB sin autenticación expuesto, contiene métricas y series de tiempo de sistemas.'},
{cat:'database',q:'intitle:"CouchDB" inurl:":5984/_utils/"',d:'Apache CouchDB Fauxton sin autenticación, acceso completo a todas las bases de datos.'},
{cat:'database',q:'filetype:sqlite OR filetype:db inurl:"/data/" intitle:"index of"',d:'Archivos de bases de datos SQLite o similares accesibles directamente via HTTP.'},
{cat:'database',q:'inurl:"cassandra" inurl:":8080" intitle:"Cassandra"',d:'Apache Cassandra con interfaz de administración expuesta sin autenticación.'},
{cat:'database',q:'intext:"Microsoft OLE DB Provider" intext:"error" inurl:".asp"',d:'Error OLE DB de Microsoft SQL Server, confirma inyección SQL en aplicaciones ASP.'},
{cat:'database',q:'inurl:"neo4j" inurl:":7474" intitle:"Neo4j"',d:'Base de datos de grafos Neo4j sin autenticación, acceso a toda la estructura del grafo.'},
{cat:'database',q:'filetype:mdb inurl:"/database/" OR inurl:"/db/"',d:'Bases de datos Microsoft Access (.mdb) accesibles directamente para descarga.'},
{cat:'database',q:'inurl:"/api/v1/namespaces" OR inurl:":8001/api" intitle:"Kubernetes"',d:'API de Kubernetes expuesta sin autenticación, control total del cluster de contenedores.'},
{cat:'database',q:'intext:"Memcache Server" inurl:":11211" stats',d:'Servidores Memcache expuestos a Internet sin autenticación, acceso a datos en caché.'},
{cat:'database',q:'filetype:sql intext:"WordPress" "wp_users" "user_pass"',d:'Dumps SQL de WordPress con hashes MD5 de contraseñas de todos los usuarios.'},
{cat:'database',q:'inurl:"/timescaledb" OR inurl:":5432" intext:"TimescaleDB"',d:'TimescaleDB expuesto para datos de series temporales sin restricciones de acceso.'},
{cat:'database',q:'inurl:"/_cat/health" OR inurl:"/_cluster/stats" intext:"elasticsearch"',d:'APIs de estado de Elasticsearch expuestas con información del cluster y datos.'},
// ═══════════════════════════════════════
// CATEGORY: CAMERA — CÁMARAS IP
// ═══════════════════════════════════════
{cat:'camera',q:'intitle:"Live View / - AXIS" inurl:view/view.shtml',d:'Cámaras AXIS Network Camera accesibles públicamente con vista en tiempo real.'},
{cat:'camera',q:'inurl:"/view/index.shtml" intitle:"Network Camera"',d:'Cámaras de red genéricas con interfaz de visualización pública accesible.'},
{cat:'camera',q:'intitle:"ip camera" inurl:"/image.jpg"',d:'Cámaras IP que sirven imágenes JPEG directas sin autenticación.'},
{cat:'camera',q:'inurl:":8080" intitle:"webcam" OR intitle:"web cam"',d:'Webcams expuestas en puerto 8080 con interfaz web accesible.'},
{cat:'camera',q:'intitle:"Hikvision" inurl:"/doc/page/login.asp"',d:'Cámaras Hikvision con panel de login accesible, las más usadas mundialmente.'},
{cat:'camera',q:'inurl:"/ISAPI/Security" intitle:"Network Camera"',d:'Cámaras con API ISAPI de Hikvision expuesta, permite consultas de configuración.'},
{cat:'camera',q:'intitle:"Dahua" inurl:"/RPC2"',d:'Cámaras Dahua con RPC accesible, frecuentemente con credenciales por defecto.'},
{cat:'camera',q:'inurl:"/cgi-bin/viewer/video.jpg"',d:'Stream de video de cámaras IP en formato JPEG accesible sin autenticación.'},
{cat:'camera',q:'intitle:"D-Link" inurl:"/video.cgi"',d:'Cámaras D-Link con stream de video accesible públicamente.'},
{cat:'camera',q:'inurl:"/mjpg/video.mjpg" intitle:"camera"',d:'Cámaras con stream MJPEG accesible directamente, streaming en tiempo real sin auth.'},
{cat:'camera',q:'intitle:"Wireless IP Network Camera" inurl:"img/video.mjpeg"',d:'Cámaras IP inalámbricas con streaming MJPEG directo accesible.'},
{cat:'camera',q:'inurl:":4747/video" OR inurl:":4747/mjpegfeed"',d:'DroidCam y cámaras Android expuestas como cámaras IP en red local/pública.'},
{cat:'camera',q:'intitle:"webcamXP 5" inurl:":8080"',d:'Software WebcamXP corriendo en Windows con streaming expuesto al público.'},
{cat:'camera',q:'inurl:"/cgi-bin/guestimage.html" intitle:"camera"',d:'Página de guest de cámaras IP que permite visualización sin autenticación.'},
{cat:'camera',q:'intitle:"Foscam" inurl:"/videostream.cgi"',d:'Cámaras Foscam con streaming CGI accesible sin credenciales.'},
{cat:'camera',q:'inurl:"/live.sdp" intitle:"RTSP"',d:'Streams RTSP de cámaras IP accesibles, reproducibles con VLC u otros players.'},
{cat:'camera',q:'intitle:"Vivotek" inurl:"/viewer/live/index.html"',d:'Cámaras Vivotek con visor en vivo accesible públicamente en la web.'},
{cat:'camera',q:'inurl:"/cgi-bin/mjpg/video.cgi" "channel=1"',d:'Cámaras con CGI de video en canal 1, sin autenticación requerida.'},
{cat:'camera',q:'intitle:"NetCamSC" OR intitle:"NetCam Live Image"',d:'Cámaras NetCam con interfaz web clásica accesible sin protección.'},
{cat:'camera',q:'inurl:"/view/viewer_index.shtml" intitle:"AXIS"',d:'Visor completo de cámaras AXIS con múltiples streams y configuración accesible.'},
// ═══════════════════════════════════════
// CATEGORY: NETWORK — DISPOSITIVOS RED
// ═══════════════════════════════════════
{cat:'network',q:'intitle:"Router" inurl:"/setup.cgi" intext:"password"',d:'Routers domésticos con página de configuración accesible sin autenticación previa.'},
{cat:'network',q:'intitle:"FRITZ!Box" inurl:":49000"',d:'Routers AVM FRITZ!Box con UPnP o interfaz de gestión expuesta.'},
{cat:'network',q:'intitle:"TP-LINK" inurl:"/userRpm/"',d:'Routers TP-Link con panel de administración expuesto al exterior.'},
{cat:'network',q:'intitle:"Cisco" inurl:":443" intext:"Cisco Systems"',d:'Dispositivos Cisco con interfaz HTTPS expuesta, routers, switches y firewalls.'},
{cat:'network',q:'intitle:"Netgear" inurl:"/setup.cgi" OR inurl:":8080"',d:'Routers Netgear con panel de administración accesible desde Internet.'},
{cat:'network',q:'intitle:"pfSense" inurl:"/index.php" intext:"Firewall"',d:'Firewalls pfSense con interfaz web accesible, gestiona toda la red corporativa.'},
{cat:'network',q:'intitle:"OPNsense" inurl:"/ui/core/"',d:'Firewalls OPNsense expuestos con panel de administración accesible.'},
{cat:'network',q:'inurl:"/cgi-bin/luci" intitle:"OpenWrt"',d:'Routers con OpenWrt y LuCI expuestos, firmware de routers de código abierto.'},
{cat:'network',q:'intitle:"DD-WRT" inurl:"/Info.htm"',d:'Routers con firmware DD-WRT con información de red expuesta públicamente.'},
{cat:'network',q:'intitle:"Ubiquiti" inurl:":443" OR inurl:":8443"',d:'Dispositivos UniFi de Ubiquiti con controlador o interfaz accesible.'},
{cat:'network',q:'inurl:"/api/2.0/stat/sta" intitle:"UniFi"',d:'API del controlador UniFi de Ubiquiti sin autenticación con estadísticas de red.'},
{cat:'network',q:'intitle:"MikroTik" inurl:":80" intext:"RouterOS"',d:'Routers MikroTik con interfaz HTTP expuesta, configuración accesible.'},
{cat:'network',q:'intitle:"Juniper" inurl:"/dana-na/auth/" intext:"J-Web"',d:'Dispositivos Juniper Networks con J-Web accesible, impactados por CVE críticos.'},
{cat:'network',q:'intitle:"SonicWall" inurl:"/auth.html" intext:"NetExtender"',d:'Appliances SonicWall SSL-VPN con portal accesible desde Internet.'},
{cat:'network',q:'inurl:"/probe" intitle:"MRTG" intext:"Traffic Analysis"',d:'MRTG (Multi Router Traffic Grapher) expuesto con gráficas de tráfico de red.'},
{cat:'network',q:'intitle:"Nagios" inurl:"/nagios/" intext:"Current Network Status"',d:'Monitoreo Nagios expuesto con mapa completo de la infraestructura de red.'},
{cat:'network',q:'intitle:"Zabbix" inurl:"/zabbix/" intext:"Login"',d:'Plataforma de monitoreo Zabbix con panel de login accesible y mapa de red.'},
{cat:'network',q:'intitle:"Cacti" inurl:"/cacti/index.php"',d:'Cacti de monitoreo de red expuesto, permite ver tráfico y dispositivos monitoreados.'},
{cat:'network',q:'inurl:":161" intitle:"SNMP" OR intext:"sysDescr"',d:'Servicios SNMP accesibles que revelan información completa de dispositivos de red.'},
{cat:'network',q:'inurl:"/webacs" intitle:"Cisco Prime"',d:'Cisco Prime Infrastructure expuesto, gestiona toda la red Cisco corporativa.'},
// ═══════════════════════════════════════
// CATEGORY: ADMIN — PANELES ADMIN
// ═══════════════════════════════════════
{cat:'admin',q:'inurl:"/admin/" intitle:"dashboard" intext:"logout"',d:'Dashboards de administración con sesión activa visible, no requieren re-autenticación.'},
{cat:'admin',q:'intitle:"Adminer" inurl:"/adminer"',d:'Adminer - gestor de bases de datos multi-motor accesible sin protección adicional.'},
{cat:'admin',q:'intitle:"cPanel" inurl:":2082"',d:'cPanel accesible en puerto 2082 sin SSL, transmisión de credenciales en texto plano.'},
{cat:'admin',q:'inurl:"/manager/html" intitle:"Apache Tomcat"',d:'Manager de Apache Tomcat que permite desplegar aplicaciones .war maliciosas.'},
{cat:'admin',q:'intitle:"Portainer" inurl:":9000"',d:'Portainer para gestión de Docker expuesto, control total de todos los contenedores.'},
{cat:'admin',q:'intitle:"AWStats" inurl:"/awstats.pl"',d:'AWStats de estadísticas web expuesto, revela URLs, IPs de visitantes y estructura del sitio.'},
{cat:'admin',q:'inurl:"/wp-admin/admin-ajax.php" intext:"action="',d:'AJAX de WordPress admin expuesto, puede revelar funciones internas del CMS.'},
{cat:'admin',q:'intitle:"Proxmox" inurl:":8006"',d:'Hypervisor Proxmox VE expuesto, gestiona todas las VMs y contenedores del servidor.'},
{cat:'admin',q:'intitle:"VMware vSphere" inurl:"/ui/" intext:"VMware"',d:'VMware vSphere con vCenter accesible, gestiona toda la infraestructura virtual.'},
{cat:'admin',q:'intitle:"iDRAC" OR intitle:"iLO" inurl:"/login.html"',d:'Interfaces de gestión remota de servidores Dell iDRAC y HP iLO accesibles.'},
{cat:'admin',q:'intitle:"IPMI" inurl:":623" OR inurl:"/cgi/ipmi.cgi"',d:'IPMI de gestión de servidores expuesto, control de hardware a nivel BMC.'},
{cat:'admin',q:'inurl:"/solr/" intitle:"Solr Admin" intext:"Core"',d:'Apache Solr admin UI expuesta sin autenticación con acceso a todos los cores.'},
{cat:'admin',q:'intitle:"RabbitMQ Management" inurl:":15672"',d:'RabbitMQ con management plugin expuesto, credenciales default guest/guest.'},
{cat:'admin',q:'intitle:"ActiveMQ" inurl:":8161/admin"',d:'Apache ActiveMQ admin console expuesta, credenciales default admin/admin.'},
{cat:'admin',q:'inurl:":9090" intitle:"Prometheus" intext:"Expression"',d:'Prometheus de métricas expuesto, revela toda la infraestructura monitorizada.'},
{cat:'admin',q:'inurl:":8888" intitle:"Airflow" intext:"DAG"',d:'Apache Airflow sin autenticación expuesto, permite ejecutar workflows arbitrarios.'},
{cat:'admin',q:'intitle:"Rancher" inurl:":443" OR inurl:":80"',d:'Rancher para gestión de Kubernetes expuesto, control total del cluster.'},
{cat:'admin',q:'inurl:"/ui/vault" intitle:"Vault"',d:'HashiCorp Vault con UI expuesta, gestiona secretos, certificados y tokens de acceso.'},
{cat:'admin',q:'intitle:"Consul" inurl:":8500/ui"',d:'HashiCorp Consul sin ACLs expuesto, service mesh y descubrimiento de servicios accesible.'},
{cat:'admin',q:'intitle:"Nomad" inurl:":4646/ui"',d:'HashiCorp Nomad sin autenticación expuesto, orquestador de workloads completamente abierto.'},
// ═══════════════════════════════════════
// CATEGORY: INFO — INFORMACIÓN SENSIBLE
// ═══════════════════════════════════════
{cat:'info',q:'intext:"CVE-2024" inurl:"/exploit"',d:'Exploits recientes de vulnerabilidades CVE-2024 disponibles en sitios de seguridad.'},
{cat:'info',q:'filetype:pdf "confidential" "internal use only" site:.gov',d:'Documentos gubernamentales confidenciales indexados por Google inadvertidamente.'},
{cat:'info',q:'intext:"SSN" OR intext:"Social Security" filetype:xls OR filetype:csv',d:'Hojas de cálculo con números de seguro social expuestas en servidores web.'},
{cat:'info',q:'filetype:xls "username" "password" "email"',d:'Excel con credenciales de usuarios completas: usuario, contraseña y correo electrónico.'},
{cat:'info',q:'intitle:"index of" "employee" filetype:xls OR filetype:csv',d:'Listas de empleados en Excel o CSV con datos personales e información corporativa.'},
{cat:'info',q:'filetype:pdf "salary" OR "salaries" "confidential" site:.com',d:'Documentos de salarios confidenciales de empresas indexados accidentalmente.'},
{cat:'info',q:'intext:"BEGIN RSA PRIVATE KEY"',d:'Claves RSA privadas expuestas en texto plano en páginas web o repositorios.'},
{cat:'info',q:'intext:"BEGIN OPENSSH PRIVATE KEY"',d:'Claves privadas OpenSSH expuestas directamente en páginas web accesibles.'},
{cat:'info',q:'intext:"AKIA" filetype:env OR filetype:yml',d:'Access Key IDs de AWS (prefijo AKIA) expuestos en archivos de configuración.'},
{cat:'info',q:'intext:"github_token" OR intext:"GITHUB_TOKEN" filetype:env',d:'Tokens de GitHub Actions expuestos en archivos .env con permisos de repositorio.'},
{cat:'info',q:'filetype:txt "credit card" OR "creditcard" inurl:dump',d:'Archivos de texto con datos de tarjetas de crédito en volcados accidentales.'},
{cat:'info',q:'intext:"sk-" filetype:env OR filetype:py',d:'Claves API de OpenAI (prefijo sk-) expuestas en código Python o .env.'},
{cat:'info',q:'filetype:pdf site:.edu "student records" OR "grade report"',d:'Expedientes y notas de estudiantes en PDFs expuestos en servidores universitarios.'},
{cat:'info',q:'intext:"Authorization: Bearer" filetype:log',d:'Tokens Bearer JWT expuestos en archivos de log, permiten suplantación de identidad.'},
{cat:'info',q:'filetype:docx "confidential" "password:" site:.mil',d:'Documentos Word militares con contraseñas embebidas indexados accidentalmente.'},
{cat:'info',q:'intext:"aws_access_key_id" intext:"aws_secret_access_key"',d:'Credenciales completas de Amazon Web Services expuestas en archivos de configuración.'},
{cat:'info',q:'intext:"STRIPE_SECRET_KEY" OR intext:"stripe_secret"',d:'Claves secretas de Stripe para pagos expuestas, permiten transacciones fraudulentas.'},
{cat:'info',q:'intext:"TWILIO_AUTH_TOKEN" filetype:env OR filetype:conf',d:'Tokens de autenticación Twilio expuestos, permiten enviar SMS/llamadas a cargo ajeno.'},
{cat:'info',q:'filetype:kdbx OR filetype:kdb intitle:"index of"',d:'Bases de datos KeePass con contraseñas expuestas, requieren cracking de la master key.'},
{cat:'info',q:'intext:"-----BEGIN CERTIFICATE-----" "-----BEGIN RSA"',d:'Certificados y claves privadas en formato PEM expuestos en páginas web.'},
// ═══════════════════════════════════════
// CATEGORY: EMAIL — SERVIDORES EMAIL
// ═══════════════════════════════════════
{cat:'email',q:'intitle:"SquirrelMail" inurl:"/squirrelmail/"',d:'Webmail SquirrelMail expuesto con login accesible para correos corporativos.'},
{cat:'email',q:'intitle:"Horde" inurl:"/horde/login.php"',d:'Suite webmail Horde Groupware expuesta para correo corporativo y colaboración.'},
{cat:'email',q:'inurl:":25" OR inurl:":587" intext:"SMTP"',d:'Servidores SMTP accesibles para testing de relay abierto y envío de spam.'},
{cat:'email',q:'intitle:"Postfix" inurl:"/postfix_admin"',d:'Panel de administración Postfix para gestión del servidor de correo.'},
{cat:'email',q:'filetype:mbox inurl:"/mail/" intitle:"index of"',d:'Archivos de buzón MBOX con correos almacenados accesibles directamente.'},
{cat:'email',q:'intext:"@gmail.com" "password" filetype:xls',d:'Hojas de cálculo con emails de Gmail y contraseñas en texto plano.'},
{cat:'email',q:'intitle:"Postfix Admin" inurl:"/postfixadmin/"',d:'Interfaz de administración Postfix Admin para gestión de dominios y buzones.'},
{cat:'email',q:'inurl:"/owa/auth.owa" intitle:"Outlook Web App"',d:'Outlook Web Access de Exchange Server expuesto para acceso a correo corporativo.'},
{cat:'email',q:'intext:"Exim" intext:"SMTP" inurl:":25"',d:'Servidores Exim SMTP accesibles para verificar configuración de relay.'},
{cat:'email',q:'intitle:"Zimbra" inurl:"/zimbra/mail"',d:'Cliente Zimbra de correo empresarial con acceso a emails, contactos y calendarios.'},
{cat:'email',q:'filetype:vcf inurl:"/contacts/" intitle:"index of"',d:'Archivos vCard (.vcf) con contactos expuestos incluyendo emails y teléfonos.'},
{cat:'email',q:'inurl:"/mail/config-v1.1.xml" intitle:"autoconfig"',d:'Archivos de autoconfiguración de Thunderbird que revelan servidores de correo internos.'},
{cat:'email',q:'intext:"relay test" inurl:"/cgi-bin/" filetype:cgi',d:'Scripts de testing de relay abierto SMTP accesibles en servidores web.'},
{cat:'email',q:'intitle:"IceWarp" inurl:"/admin/index.html"',d:'Panel de administración del servidor de correo IceWarp accesible.'},
{cat:'email',q:'inurl:"/webmail" intitle:"Atmail" OR intitle:"AtMail"',d:'Webmail Atmail expuesto para acceso a correos corporativos.'},
// ═══════════════════════════════════════
// CATEGORY: CODE — CÓDIGO FUENTE
// ═══════════════════════════════════════
{cat:'code',q:'site:github.com "password" "api_key" language:Python',d:'Código Python en GitHub con contraseñas y claves API hardcodeadas.'},
{cat:'code',q:'site:github.com "AWS_SECRET_ACCESS_KEY" language:JavaScript',d:'Secretos AWS hardcodeados en JavaScript de repositorios GitHub públicos.'},
{cat:'code',q:'site:github.com intext:"MYSQL_ROOT_PASSWORD" filetype:env',d:'Archivos .env en GitHub con contraseña root de MySQL en texto plano.'},
{cat:'code',q:'site:gitlab.com "private_token" OR "access_token" filetype:rb',d:'Tokens privados de acceso en código Ruby en repositorios GitLab.'},
{cat:'code',q:'site:bitbucket.org "password" filetype:py',d:'Contraseñas en código Python en repositorios Bitbucket públicos.'},
{cat:'code',q:'site:github.com "connectionString" "password=" filetype:config',d:'Cadenas de conexión a bases de datos con contraseñas en archivos de config.'},
{cat:'code',q:'site:github.com "SECRET_KEY" Django filetype:py',d:'Secret keys de Django hardcodeadas en repositorios GitHub, comprometen la seguridad CSRF.'},
{cat:'code',q:'site:github.com "private_key" "BEGIN RSA" filetype:pem',d:'Claves privadas RSA en formato PEM en repositorios de código públicos.'},
{cat:'code',q:'site:github.com "HEROKU_API_KEY" OR "heroku_token"',d:'Tokens de API de Heroku expuestos que permiten desplegar aplicaciones en la plataforma.'},
{cat:'code',q:'site:github.com "firebase" "apiKey" filetype:js',d:'Configuraciones Firebase con API keys en JavaScript de proyectos públicos.'},
{cat:'code',q:'site:github.com "slack_token" OR "SLACK_TOKEN" language:Python',d:'Tokens de Slack expuestos en Python que permiten leer mensajes de canales privados.'},
{cat:'code',q:'site:github.com "SENDGRID_API_KEY" language:Ruby',d:'API keys de SendGrid para envío masivo de correos expuestas en Ruby.'},
{cat:'code',q:'site:github.com "consumer_key" "consumer_secret" Twitter',d:'Credenciales OAuth de Twitter/X expuestas en repositorios de código públicos.'},
{cat:'code',q:'site:github.com "PAYPAL_SECRET" OR "paypal_client_secret"',d:'Secretos de PayPal expuestos que permiten procesar pagos fraudulentos.'},
{cat:'code',q:'site:github.com "db_password" OR "database_password" filetype:yaml',d:'Contraseñas de base de datos en archivos YAML de configuración en GitHub.'},
// ═══════════════════════════════════════
// CATEGORY: IOT — DISPOSITIVOS IoT
// ═══════════════════════════════════════
{cat:'iot',q:'intitle:"ESP8266" OR intitle:"ESP32" inurl:"/control"',d:'Dispositivos IoT ESP8266/ESP32 con panel de control accesible desde Internet.'},
{cat:'iot',q:'intitle:"Home Assistant" inurl:":8123"',d:'Home Assistant domótica expuesto, controla todos los dispositivos del hogar inteligente.'},
{cat:'iot',q:'intitle:"Domoticz" inurl:":8080" OR inurl:":8443"',d:'Sistema domótico Domoticz accesible, controla luces, termostatos y sensores.'},
{cat:'iot',q:'intitle:"openHAB" inurl:":8080" intext:"Smart Home"',d:'openHAB plataforma de automatización del hogar expuesta sin autenticación.'},
{cat:'iot',q:'inurl:":1880" intitle:"Node-RED"',d:'Node-RED de programación IoT visual expuesto, permite crear flows para controlar dispositivos.'},
{cat:'iot',q:'intitle:"Shelly" inurl:"/settings"',d:'Dispositivos Shelly de automatización doméstica con configuración accesible.'},
{cat:'iot',q:'intitle:"MQTT" inurl:":1883" OR inurl:":8883"',d:'Brokers MQTT expuestos sin autenticación, pub/sub de mensajes IoT sin cifrar.'},
{cat:'iot',q:'inurl:"/cgi-bin/luci/;stok=/"',d:'Vulnerabilidad de bypass de autenticación en routers con OpenWrt/LuCI.'},
{cat:'iot',q:'intitle:"GLiNet" inurl:"/cgi-bin/api"',d:'Routers GL.iNet con API expuesta, configuración de red accesible sin autenticación.'},
{cat:'iot',q:'intitle:"TP-Link EAP" inurl:"/EAP_AC"',d:'Access Points TP-Link EAP con controlador accesible sin autenticación.'},
{cat:'iot',q:'inurl:":3000" intitle:"Grafana" intext:"IoT" OR intext:"sensor"',d:'Grafana con datos de sensores IoT accesible, historial de todos los dispositivos.'},
{cat:'iot',q:'intitle:"Wemo" inurl:":49153" OR inurl:":49154"',d:'Dispositivos Belkin Wemo con UPnP expuesto, control de enchufes inteligentes.'},
{cat:'iot',q:'inurl:"/api/v1/" intitle:"SmartThings"',d:'API de Samsung SmartThings accesible con control de dispositivos domóticos.'},
{cat:'iot',q:'intext:"Raspberry Pi" inurl:":8080" intitle:"camera"',d:'Cámaras y proyectos en Raspberry Pi expuestos con streaming accesible.'},
{cat:'iot',q:'intitle:"Zigbee2MQTT" inurl:":8080"',d:'Coordinador Zigbee2MQTT expuesto, gestiona todos los dispositivos Zigbee del hogar.'},
// ═══════════════════════════════════════
// CATEGORY: CLOUD — SERVICIOS EN LA NUBE
// ═══════════════════════════════════════
{cat:'cloud',q:'site:s3.amazonaws.com "index of" filetype:xml',d:'Buckets S3 de Amazon con listado de archivos habilitado públicamente.'},
{cat:'cloud',q:'inurl:"s3.amazonaws.com" filetype:pdf "confidential"',d:'Documentos PDF confidenciales almacenados en S3 de AWS accesibles públicamente.'},
{cat:'cloud',q:'site:blob.core.windows.net "index of"',d:'Azure Blob Storage con acceso público habilitado, listado de archivos disponible.'},
{cat:'cloud',q:'site:storage.googleapis.com filetype:sql',d:'Google Cloud Storage con dumps SQL accesibles sin autenticación.'},
{cat:'cloud',q:'inurl:"digitaloceanspaces.com" filetype:env',d:'DigitalOcean Spaces con archivos .env accesibles públicamente.'},
{cat:'cloud',q:'site:s3.amazonaws.com "backup" filetype:zip OR filetype:tar',d:'Backups comprimidos en S3 con datos de aplicaciones completas accesibles.'},
{cat:'cloud',q:'inurl:"cloudfront.net" "wp-config.php"',d:'Archivos de configuración de WordPress servidos a través de CloudFront sin restricciones.'},
{cat:'cloud',q:'site:s3.amazonaws.com "database" filetype:sqlite',d:'Bases de datos SQLite almacenadas en S3 con acceso público sin autenticación.'},
{cat:'cloud',q:'inurl:"amazonaws.com" ".pem" OR ".key"',d:'Claves privadas y certificados almacenados en buckets S3 públicos.'},
{cat:'cloud',q:'site:s3.amazonaws.com "logs" filetype:log',d:'Archivos de log de aplicaciones almacenados en S3 accesibles públicamente.'},
{cat:'cloud',q:'inurl:"blob.core.windows.net" filetype:xls OR filetype:xlsx',d:'Hojas Excel con datos empresariales en Azure Blob Storage con acceso público.'},
{cat:'cloud',q:'site:s3.amazonaws.com "financial" OR "invoice" filetype:pdf',d:'Facturas y documentos financieros en S3 accesibles sin autenticación.'},
{cat:'cloud',q:'inurl:"storage.googleapis.com" filetype:json "private"',d:'Archivos JSON con datos privados en Google Cloud Storage con acceso público.'},
{cat:'cloud',q:'site:s3.amazonaws.com "employee" filetype:csv',d:'CSVs de empleados con datos personales almacenados en S3 públicamente.'},
{cat:'cloud',q:'inurl:"r2.cloudflarestorage.com" intitle:"index of"',d:'Cloudflare R2 Storage con listado público habilitado para todos los archivos.'},
// ═══════════════════════════════════════
// CATEGORY: API — APIs EXPUESTAS
// ═══════════════════════════════════════
{cat:'api',q:'inurl:"/api/v1/users" intitle:"JSON"',d:'Endpoints de API REST que exponen listados completos de usuarios sin autenticación.'},
{cat:'api',q:'inurl:"/swagger-ui.html" intitle:"Swagger UI"',d:'Swagger UI de documentación de APIs expuesta, muestra todos los endpoints disponibles.'},
{cat:'api',q:'inurl:"/api-docs" intitle:"API Documentation"',d:'Documentación de APIs con endpoints detallados accesible públicamente.'},
{cat:'api',q:'inurl:"/graphql" intitle:"GraphiQL"',d:'GraphiQL IDE expuesto, permite explorar y ejecutar queries GraphQL sin autenticación.'},
{cat:'api',q:'inurl:"/api/v1/admin" intitle:"API"',d:'Endpoints de administración de APIs REST accesibles sin autenticación.'},
{cat:'api',q:'inurl:"/wp-json/wp/v2/users" intext:"slug"',d:'API REST de WordPress que expone todos los usuarios con metadatos sin autenticación.'},
{cat:'api',q:'inurl:"/.well-known/openid-configuration"',d:'Configuración OpenID Connect expuesta que revela endpoints de autenticación.'},
{cat:'api',q:'inurl:"/api/swagger.json" OR inurl:"/api/openapi.json"',d:'Especificaciones OpenAPI/Swagger en JSON que documentan toda la API del sistema.'},
{cat:'api',q:'inurl:"/v1/secret" inurl:"/api" intitle:"Vault"',d:'API de HashiCorp Vault expuesta para gestión de secretos sin autenticación.'},
{cat:'api',q:'inurl:"/api/v1/namespaces" intext:"Kubernetes"',d:'API de Kubernetes expuesta sin autenticación, control total del cluster.'},
{cat:'api',q:'inurl:"/metrics" intitle:"Prometheus" intext:"go_goroutines"',d:'Endpoint de métricas Prometheus expuesto con datos internos del sistema.'},
{cat:'api',q:'inurl:"/health" OR inurl:"/healthz" intext:"{\"status\":\"UP\"}"',d:'Endpoints de health check que revelan estado interno y microservicios del sistema.'},
{cat:'api',q:'inurl:"/api/v1/pods" intext:"containerStatuses"',d:'API de pods de Kubernetes expuesta con información detallada de contenedores.'},
{cat:'api',q:'inurl:"/debug/pprof" intitle:"profiling"',d:'Endpoints de profiling Go expuestos, revelan uso de memoria y goroutines activas.'},
{cat:'api',q:'inurl:"/env" intext:"systemProperties" intext:"java.version"',d:'Actuator /env de Spring Boot que expone todas las variables de entorno y configuración.'},
// ═══════════════════════════════════════
// CATEGORY: SCADA — ICS/SCADA INDUSTRIAL
// ═══════════════════════════════════════
{cat:'scada',q:'intitle:"SCADA" inurl:"/index.html" intext:"Plant"',d:'Sistemas SCADA industriales con interfaz web accesible para monitoreo de planta.'},
{cat:'scada',q:'intitle:"Siemens" inurl:"/portal/apps/WEB_UI"',d:'Interfaces WEB de Siemens para control industrial, PLC y automatización.'},
{cat:'scada',q:'intitle:"Rockwell" OR intitle:"Allen-Bradley" inurl:"/logix"',d:'Sistemas de control Rockwell Automation/Allen-Bradley accesibles remotamente.'},
{cat:'scada',q:'intitle:"GE Digital" inurl:"/historian" intext:"Plant"',d:'Historian de GE Digital para datos de planta industrial accesible sin auth.'},
{cat:'scada',q:'inurl:":4840" intitle:"OPC UA"',d:'Servidores OPC UA industriales expuestos a Internet sin cifrado ni autenticación.'},
{cat:'scada',q:'intitle:"Wonderware" inurl:"/Archestra"',d:'Software SCADA Wonderware de AVEVA expuesto para control de procesos industriales.'},
{cat:'scada',q:'inurl:":102" intitle:"S7" OR intext:"Simatic"',d:'PLCs Siemens S7 con protocolo S7comm expuesto, control directo de PLC industrial.'},
{cat:'scada',q:'intitle:"HMI" inurl:"/hmi/" intext:"Control"',d:'Interfaz HMI (Human Machine Interface) industrial accesible remotamente.'},
{cat:'scada',q:'intitle:"BACnet" inurl:":47808"',d:'Dispositivos BACnet de automatización de edificios expuestos sin autenticación.'},
{cat:'scada',q:'inurl:"/modbus" OR inurl:":502" intext:"Modbus"',d:'Dispositivos Modbus expuestos, protocolo industrial sin autenticación.'},
{cat:'scada',q:'intitle:"InTouch" inurl:"/InTouchOMIServer"',d:'SCADA InTouch de AVEVA expuesto con acceso a datos de producción industrial.'},
{cat:'scada',q:'intext:"PROFIBUS" OR intext:"PROFINET" inurl:"/gateway"',d:'Gateways PROFIBUS/PROFINET industriales expuestos en Internet.'},
{cat:'scada',q:'intitle:"EnergyAxis" OR intitle:"Smart Grid" inurl:"/grid"',d:'Sistemas de smart grid y gestión energética industrial expuestos.'},
{cat:'scada',q:'inurl:":44818" intitle:"EtherNet/IP"',d:'Dispositivos EtherNet/IP de Allen-Bradley expuestos sin protección.'},
{cat:'scada',q:'intitle:"DNP3" OR intext:"DNP3 Gateway" inurl:":20000"',d:'Gateways DNP3 para utilities (agua, electricidad) expuestos remotamente.'},
// ═══════════════════════════════════════
// CATEGORY: MEDICAL — SISTEMAS MÉDICOS
// ═══════════════════════════════════════
{cat:'medical',q:'intitle:"DICOM" inurl:"/wado" OR inurl:":8080/wado"',d:'Archivos DICOM médicos (imágenes de escáner/rayos X) accesibles sin autenticación.'},
{cat:'medical',q:'intitle:"OpenEMR" inurl:"/interface/login/"',d:'Sistema OpenEMR de historias clínicas electrónicas con login accesible.'},
{cat:'medical',q:'intitle:"Epic" inurl:"/EpicCareAmbulatory"',d:'Sistema Epic de registros médicos hospitalarios con acceso a datos de pacientes.'},
{cat:'medical',q:'inurl:":4242" intitle:"Orthanc"',d:'Servidor Orthanc DICOM con REST API expuesta, almacena imágenes médicas.'},
{cat:'medical',q:'intitle:"Meditech" inurl:"/login"',d:'Sistema HIS Meditech de gestión hospitalaria con panel de login accesible.'},
{cat:'medical',q:'filetype:hl7 inurl:"/hl7/" intitle:"index of"',d:'Archivos HL7 con registros médicos de pacientes expuestos en directorios abiertos.'},
{cat:'medical',q:'intitle:"PACS" inurl:"/pacs/" intext:"patient"',d:'Sistema PACS (Picture Archiving) con imágenes médicas de pacientes accesibles.'},
{cat:'medical',q:'inurl:"/api/HL7" OR inurl:"/fhir/" intext:"patient"',d:'APIs FHIR de interoperabilidad médica que exponen datos de pacientes sin auth.'},
{cat:'medical',q:'intitle:"VistA" inurl:"/vistaweb/"',d:'Sistema VistA del Departamento de Veterans Affairs con datos médicos accesible.'},
{cat:'medical',q:'intext:"patient" intext:"diagnosis" filetype:csv site:.hospital',d:'Datos de diagnósticos de pacientes en CSV expuestos en servidores hospitalarios.'},
// ═══════════════════════════════════════
// EXTRA DORKS — VARIOS AVANZADOS
// ═══════════════════════════════════════
{cat:'vuln',q:'inurl:"/cgi-bin/login.cgi" intext:"200 OK" filetype:cgi',d:'Scripts CGI de login con respuesta 200 directa, pueden ser vulnerables a bypass.'},
{cat:'files',q:'intitle:"index of" "terraform.tfstate"',d:'Archivos de estado de Terraform con configuración completa de infraestructura cloud.'},
{cat:'files',q:'intitle:"index of" ".npmrc" "authToken"',d:'Archivos .npmrc con tokens de autenticación de npm para publicar paquetes.'},
{cat:'code',q:'site:github.com "BEGIN PGP PRIVATE KEY BLOCK"',d:'Claves PGP privadas expuestas en repositorios GitHub públicos.'},
{cat:'info',q:'intext:"Shodan" inurl:"/api/info"',d:'APIs de Shodan expuestas con claves de acceso para búsqueda de dispositivos.'},
{cat:'api',q:'inurl:"/.env" intext:"APP_KEY=" intext:"DB_PASSWORD="',d:'Archivos .env de Laravel con APP_KEY y credenciales de base de datos expuestos.'},
{cat:'login',q:'inurl:"/remote/fgt_lang" intitle:"FortiGate SSL VPN"',d:'FortiGate SSL VPN expuesto, vulnerable a CVE-2023-27997 (heap overflow crítico).'},
{cat:'vuln',q:'inurl:"/cgi-bin/login.cgi" intitle:"NetGear" intext:"NETGEAR"',d:'Routers Netgear con CGI de login vulnerable a bypass de autenticación conocido.'},
{cat:'files',q:'filetype:json inurl:"/.well-known/" "private" "secret"',d:'Archivos JSON en well-known con claves privadas o secretos de aplicaciones.'},
{cat:'network',q:'inurl:":9091" intitle:"Transmission" intext:"Add torrent"',d:'Transmission BitTorrent con WebUI expuesta sin contraseña en servidor.'},
{cat:'admin',q:'intitle:"Netdata" inurl:":19999"',d:'Netdata de monitoreo en tiempo real expuesto con datos de rendimiento del servidor.'},
{cat:'database',q:'inurl:":5000" intitle:"RedisInsight"',d:'RedisInsight para gestión de Redis expuesto, visualiza y edita todos los datos.'},
{cat:'iot',q:'intitle:"Frigate NVR" inurl:":5000"',d:'Frigate NVR (Network Video Recorder) con IA expuesto, acceso a todas las cámaras.'},
{cat:'cloud',q:'site:s3.amazonaws.com "terraform" ".tfstate"',d:'Estado de Terraform en S3 con toda la configuración de infraestructura cloud.'},
{cat:'login',q:'intitle:"Keycloak" inurl:"/auth/admin/"',d:'Administración de Keycloak SSO expuesta, gestiona toda la autenticación corporativa.'},
{cat:'api',q:'inurl:"/api/v1/fleet" OR inurl:"/api/v2/hosts"',d:'APIs de gestión de flotas con datos de todos los dispositivos sin autenticación.'},
{cat:'files',q:'intitle:"index of" ".aws" "credentials"',d:'Directorio .aws con archivo credentials exponiendo Access Key y Secret Key.'},
{cat:'info',q:'filetype:txt "auth_token" inurl:"telegram" OR inurl:"bot"',d:'Tokens de bots de Telegram expuestos en archivos de texto accesibles.'},
{cat:'vuln',q:'inurl:"/manager/status" intitle:"Apache Tomcat" intext:"JVM"',d:'Estado del servidor Tomcat con información de JVM, memoria y threads activos.'},
{cat:'code',q:'site:github.com "TELEGRAM_TOKEN" OR "telegram_bot_token"',d:'Tokens de bots de Telegram expuestos en código de repositorios públicos de GitHub.'},
{cat:'network',q:'intitle:"pfSense" intext:"Firewall" inurl:"/index.php?login"',d:'pfSense con página de login expuesta, firewall de red completamente accesible.'},
{cat:'files',q:'intitle:"index of" "kubeconfig" OR ".kube/config"',d:'Archivos kubeconfig expuestos con credenciales de acceso al cluster Kubernetes.'},
{cat:'camera',q:'inurl:"/snapshot.cgi" intitle:"Wireless IP Camera"',d:'Capturas instantáneas de cámaras IP sin autenticación, imagen actual en tiempo real.'},
{cat:'scada',q:'intitle:"Ignition" inurl:":8088" intext:"Inductive Automation"',d:'Plataforma SCADA Ignition de Inductive Automation expuesta con acceso al gateway.'},
{cat:'admin',q:'inurl:":8161/admin" intitle:"ActiveMQ" intext:"Queues"',d:'Apache ActiveMQ admin console con listado de queues accesible sin autenticación.'},
{cat:'vuln',q:'inurl:"struts2" intext:".action?debug=xml"',d:'Debug de Struts2 habilitado, expone información interna y puede permitir RCE.'},
{cat:'info',q:'filetype:xls inurl:"HR" OR inurl:"human-resources" "salary"',d:'Hojas de cálculo de RRHH con salarios, departamentos y datos de empleados expuestos.'},
{cat:'login',q:'inurl:"/console" intitle:"WebLogic Server" inurl:":7001"',d:'Consola de administración Oracle WebLogic expuesta, historial de RCE críticas.'},
{cat:'database',q:'inurl:":5984" intitle:"CouchDB" intext:"_utils"',d:'CouchDB con Fauxton admin UI expuesto en puerto 5984 sin autenticación.'},
{cat:'files',q:'intitle:"index of" "package-lock.json" inurl:"/api/"',d:'package-lock.json de proyectos Node.js con dependencias y versiones exactas expuestas.'},
{cat:'api',q:'inurl:"/api/token" intext:"access_token" filetype:json',d:'Tokens de acceso OAuth en respuestas JSON expuestas sin autenticación requerida.'},
{cat:'iot',q:'intitle:"Tasmota" inurl:"/cm?cmnd=Status"',d:'Dispositivos con firmware Tasmota expuestos, control de enchufes y sensores inteligentes.'},
{cat:'cloud',q:'inurl:"appspot.com" filetype:json "api_key" OR "client_secret"',d:'Aplicaciones Google App Engine con secretos expuestos en archivos JSON públicos.'},
{cat:'network',q:'inurl:":9093" intitle:"Alertmanager" intext:"Prometheus"',d:'Alertmanager de Prometheus expuesto con configuración de alertas del sistema.'},
{cat:'medical',q:'inurl:"/cgi-bin/remctrl.cgi" intitle:"medical" OR intitle:"hospital"',d:'CGI de control remoto de equipos médicos sin autenticación en red hospitalaria.'},
{cat:'files',q:'intitle:"index of" "sitemap.xml" inurl:"/admin/"',d:'Sitemaps de zonas admin que revelan estructura completa de URLs de administración.'},
{cat:'code',q:'site:github.com "hardcoded" "password" "admin"',d:'Código con contraseñas hardcodeadas de administrador reconocidas en comentarios.'},
{cat:'login',q:'intitle:"Vault" inurl:"/ui/vault/auth" intext:"HashiCorp"',d:'HashiCorp Vault UI de gestión de secretos expuesto con panel de autenticación accesible.'},
{cat:'vuln',q:'inurl:"/cgi-bin/viewcvs.cgi" intitle:"ViewCVS"',d:'ViewCVS para repositorios CVS expuesto, permite navegar por todo el código fuente.'},
{cat:'info',q:'filetype:txt "-----BEGIN PRIVATE KEY-----"',d:'Claves privadas PKCS#8 en archivos de texto plano indexados por Google.'},
{cat:'network',q:'intitle:"OpenVPN Monitor" inurl:"/index.php"',d:'Monitor de OpenVPN expuesto con lista de todos los usuarios VPN conectados actualmente.'},
{cat:'admin',q:'inurl:":8080" intitle:"Hadoop" intext:"DataNode"',d:'HDFS DataNode de Hadoop expuesto en puerto 8080 con acceso a datos del cluster.'},
{cat:'camera',q:'intitle:"EyeSpyFX" inurl:"/streaming"',d:'Cámaras EyeSpyFX con streaming accesible públicamente sin credenciales.'},
{cat:'files',q:'intitle:"index of" ".bash_history"',d:'.bash_history expuesto con historial completo de comandos ejecutados en el servidor.'},
{cat:'login',q:'inurl:"/login" intitle:"Portainer" intext:"Docker"',d:'Portainer CE con login expuesto para gestión completa de contenedores Docker.'},
{cat:'api',q:'inurl:"/api/v1/query_range" intitle:"Prometheus"',d:'API de consultas de Prometheus expuesta para acceso a todas las métricas del sistema.'},
{cat:'scada',q:'intitle:"Schneider Electric" inurl:"/EcoStruxure"',d:'Plataforma EcoStruxure de Schneider Electric para automatización industrial accesible.'},
{cat:'database',q:'inurl:":8500" intitle:"Consul" intext:"Services"',d:'HashiCorp Consul sin ACLs expuesto con descubrimiento de todos los servicios internos.'},
{cat:'files',q:'intitle:"index of" ".zshrc" OR ".bashrc" inurl:"/home/"',d:'Archivos de configuración de shell expuestos con aliases, exports y posibles tokens.'},
{cat:'info',q:'filetype:json "refresh_token" "access_token" "expires_in"',d:'Tokens OAuth JSON completos con refresh_token y access_token expuestos.'},
{cat:'code',q:'site:github.com "DISCORD_TOKEN" OR "discord_bot_token"',d:'Tokens de bots de Discord expuestos en repositorios de GitHub.'},
{cat:'vuln',q:'inurl:"/webdav/" intitle:"WebDAV"',d:'Servidores WebDAV expuestos, permiten upload/download/delete de archivos remotamente.'},
{cat:'login',q:'intitle:"Guacamole" inurl:"/guacamole/#/login"',d:'Apache Guacamole (escritorio remoto web) expuesto para acceso a servidores internos.'},
{cat:'network',q:'inurl:":9115" intitle:"Blackbox Exporter"',d:'Blackbox Exporter de Prometheus expuesto con sondas de red y endpoints internos.'},
{cat:'cloud',q:'inurl:"cdn.digitaloceanspaces.com" filetype:sql',d:'Dumps SQL en DigitalOcean Spaces con acceso público sin autenticación.'},
{cat:'iot',q:'intitle:"ioBroker" inurl:":8081" intext:"Admin"',d:'ioBroker de automatización IoT expuesto con control de todos los dispositivos.'},
{cat:'files',q:'intitle:"index of" "sftp-config.json"',d:'Configuración SFTP con credenciales de servidores FTP/SFTP en texto plano.'},
{cat:'admin',q:'inurl:":8080/h2-console" intitle:"H2 Console"',d:'Consola H2 de base de datos en memoria expuesta, permite SQL arbitrario.'},
{cat:'api',q:'inurl:"/api/v2/users" intext:"email" intext:"role"',d:'API v2 con lista de usuarios, emails y roles sin necesidad de autenticación.'},
{cat:'info',q:'filetype:json "private_key" "client_email" "token_uri"',d:'Service accounts de Google Cloud con claves privadas en JSON expuestos.'},
{cat:'vuln',q:'inurl:"?debug=1" OR inurl:"?debug=true" intext:"DEBUG"',d:'Modo debug habilitado en aplicaciones web que exponen información interna detallada.'},
{cat:'files',q:'intitle:"index of" "Dockerfile" inurl:"/docker/"',d:'Dockerfiles expuestos que revelan estructura de contenedores y posibles secretos.'},
{cat:'login',q:'intitle:"Graylog" inurl:"/login" intext:"Centralized Log"',d:'Graylog de centralización de logs expuesto con acceso a todos los logs del sistema.'},
{cat:'network',q:'inurl:":9696" intitle:"OpenStack Neutron"',d:'API de Neutron de OpenStack expuesta para gestión de redes virtuales del cloud.'},
{cat:'database',q:'inurl:":7474" intitle:"Neo4j Browser"',d:'Neo4j Browser expuesto para base de datos de grafos sin autenticación.'},
{cat:'camera',q:'inurl:"/stream" inurl:":8554" intitle:"RTSP"',d:'Streams RTSP de cámaras IP sin cifrar accesibles directamente en el puerto 8554.'},
{cat:'scada',q:'intitle:"ABB" inurl:"/Engineering/Workspace"',d:'Espacio de trabajo de ingeniería ABB para automatización industrial accesible.'},
{cat:'code',q:'site:github.com "VAULT_TOKEN" OR "vault_token"',d:'Tokens de HashiCorp Vault expuestos en repositorios de código públicos.'},
{cat:'files',q:'intitle:"index of" ".ssh" "authorized_keys"',d:'Directorio .ssh expuesto con authorized_keys que revela claves públicas autorizadas.'},
{cat:'admin',q:'inurl:":9411" intitle:"Zipkin"',d:'Zipkin de distributed tracing expuesto, muestra arquitectura completa de microservicios.'},
{cat:'cloud',q:'inurl:"azurecr.io" intitle:"Azure Container Registry"',d:'Azure Container Registry con acceso público habilitado a imágenes Docker privadas.'},
{cat:'vuln',q:'intext:"Warning: session_start()" inurl:".php"',d:'Errores de sesión PHP expuestos que indican configuración incorrecta del servidor.'},
{cat:'info',q:'filetype:json "consumer_key" "consumer_secret" "oauth_token"',d:'Credenciales OAuth completas en JSON con consumer_key y oauth_token expuestos.'},
{cat:'iot',q:'intitle:"ESPHome" inurl:":6052"',d:'ESPHome para firmware de dispositivos IoT expuesto, permite actualizar todos los ESP.'},
{cat:'login',q:'intitle:"Mattermost" inurl:"/login" intext:"Sign in"',d:'Servidor Mattermost de mensajería corporativa con login accesible desde Internet.'},
{cat:'api',q:'inurl:"/api/v1/auth/login" intext:"{\"username\"" filetype:json',d:'Endpoints de autenticación API con ejemplos de credenciales en respuestas JSON.'},
{cat:'files',q:'intitle:"index of" "wp-content/uploads" filetype:pdf',d:'Directorio de uploads de WordPress con PDFs indexados y accesibles públicamente.'},
{cat:'network',q:'inurl:":9182" intitle:"Windows Exporter"',d:'Windows Exporter de Prometheus expuesto con métricas detalladas del servidor Windows.'},
{cat:'database',q:'inurl:":4369" intitle:"RabbitMQ" intext:"erlang"',d:'Puerto de distribución Erlang de RabbitMQ expuesto para clustering sin auth.'},
{cat:'code',q:'site:github.com "CLOUDFLARE_API_TOKEN" language:yaml',d:'Tokens de API de Cloudflare expuestos en workflows YAML de GitHub Actions.'},
{cat:'admin',q:'inurl:":15672" intitle:"RabbitMQ Management"',d:'Panel de gestión RabbitMQ en puerto 15672 con credenciales default guest/guest.'},
{cat:'medical',q:'inurl:"/wado?requestType=WADO" intext:"seriesUID"',d:'Peticiones WADO de imágenes DICOM médicas accesibles sin autenticación.'},
{cat:'files',q:'intitle:"index of" "google-credentials.json"',d:'Service account credentials de Google Cloud en JSON expuesto en servidor web.'},
{cat:'vuln',q:'inurl:"/cgi-bin/webproc?action=getpage&var:language=en_us&oldmsg"',d:'Routers D-Link vulnerables a command injection en CGI webproc.'},
{cat:'scada',q:'intitle:"Aveva" OR intitle:"AVEVA" inurl:"/AVEVA"',d:'Plataforma AVEVA para automatización industrial e ingeniería expuesta remotamente.'},
{cat:'login',q:'inurl:"/idp/login.do" intitle:"Shibboleth" intext:"SSO"',d:'Proveedor de identidad Shibboleth SSO expuesto para autenticación federada.'},
{cat:'info',q:'filetype:json "installation_id" "app_id" "private_key" github',d:'Credenciales de GitHub Apps con private_key y app_id expuestas en JSON.'},
{cat:'camera',q:'intitle:"IP Camera" inurl:"/video_stream.cgi"',d:'CGI de streaming de cámaras IP genéricas accesible sin credenciales de acceso.'},
{cat:'files',q:'intitle:"index of" "secrets.json" OR "secret.json"',d:'Archivos JSON con secretos de aplicaciones expuestos en directorios web.'},
{cat:'api',q:'inurl:"/api/v1/secrets" intext:"Kubernetes"',d:'API de secretos Kubernetes expuesta que devuelve todos los secrets del namespace.'},
{cat:'network',q:'intitle:"Traefik" inurl:":8080/dashboard"',d:'Dashboard de Traefik reverse proxy expuesto con todos los servicios y rutas configuradas.'},
{cat:'vuln',q:'inurl:"/cgi-bin/user.cgi" intext:"login" intext:"password"',d:'CGI de gestión de usuarios en routers/dispositivos potencialmente vulnerable.'},
{cat:'files',q:'intitle:"index of" "firebase-adminsdk" ".json"',d:'Credenciales de Firebase Admin SDK expuestas con acceso total a proyectos Firebase.'},
{cat:'admin',q:'inurl:":9090" intitle:"Thanos" intext:"Querier"',d:'Thanos de almacenamiento Prometheus expuesto con acceso a métricas históricas.'},
{cat:'cloud',q:'inurl:"s3.us-east" OR inurl:"s3.us-west" intext:"xml version" intext:"ListBucketResult"',d:'Buckets S3 con listado XML público habilitado en regiones de AWS específicas.'},
{cat:'code',q:'site:github.com "AZURE_CLIENT_SECRET" language:json',d:'Client secrets de Azure Active Directory expuestos en archivos JSON de GitHub.'},
{cat:'iot',q:'intitle:"Daikin" inurl:"/aircon/get_sensor_info.cgi"',d:'Aire acondicionado Daikin con API CGI expuesta para lectura de sensores y control.'},
{cat:'login',q:'intitle:"Roundcube" inurl:"/roundcubemail/" intext:"Webmail"',d:'Webmail Roundcube expuesto para acceso a correo corporativo sin 2FA.'},
{cat:'database',q:'inurl:":6380" OR inurl:":6381" intext:"Redis"',d:'Instancias Redis en puertos alternativos expuestas sin autenticación configurada.'},
{cat:'files',q:'intitle:"index of" "application.properties" "spring.datasource"',d:'Propiedades de Spring Boot con configuración de datasource y contraseñas.'},
{cat:'vuln',q:'inurl:"/filemanager/" intitle:"File Manager" intext:"upload"',d:'File Managers web expuestos que permiten subir archivos arbitrarios al servidor.'},
{cat:'info',q:'filetype:json "type": "service_account" "private_key"',d:'Cuentas de servicio de Google Cloud con claves privadas RSA en JSON expuestos.'},
{cat:'medical',q:'intext:"HL7 FHIR" inurl:"/fhir/Patient" intext:"Bundle"',d:'APIs FHIR R4 que exponen recursos de pacientes sin autenticación OAuth2.'},
{cat:'network',q:'inurl:":8300" intitle:"Consul" intext:"RPC"',d:'Puerto RPC de HashiCorp Consul expuesto para comunicación inter-agente.'},
{cat:'admin',q:'inurl:"/login.html" intitle:"NetBeans" inurl:":8080"',d:'Apache NetBeans profiler o servidor expuesto en puerto 8080.'},
{cat:'camera',q:'inurl:"/cgi-bin/viewer/getpic.php" intitle:"camera"',d:'Script PHP de cámaras IP que devuelve imagen actual sin autenticación.'},
{cat:'files',q:'intitle:"index of" ".netrc" inurl:"/home/"',d:'Archivos .netrc con credenciales FTP/HTTP almacenadas en texto plano expuestos.'},
{cat:'scada',q:'intitle:"Inductive Automation" inurl:":8088/system/gateway"',d:'Gateway del sistema Ignition SCADA expuesto con datos de todos los procesos.'},
{cat:'code',q:'site:github.com "POSTGRES_PASSWORD" OR "PGPASSWORD" filetype:env',d:'Contraseñas de PostgreSQL expuestas en archivos .env de repositorios GitHub.'},
{cat:'api',q:'inurl:"/api/v1/service_accounts" intext:"token" Kubernetes',d:'Service accounts de Kubernetes con tokens expuestos en respuestas de API.'},
{cat:'login',q:'intitle:"Proxmox" inurl:":8006/#v1:0"',d:'Hypervisor Proxmox VE con panel de gestión de VMs y contenedores expuesto.'},
{cat:'info',q:'intext:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9" filetype:log',d:'Tokens JWT con algoritmo RS256 expuestos en archivos de log del sistema.'},
{cat:'files',q:'intitle:"index of" "credentials.xml" Jenkins',d:'Credenciales almacenadas en Jenkins expuestas en XML con posibles secretos.'},
{cat:'vuln',q:'inurl:"/cgi-bin/" filetype:php intext:"passthru" OR intext:"system("',d:'Scripts PHP con funciones de ejecución de comandos del sistema potencialmente inyectables.'},
{cat:'database',q:'inurl:":9042" intitle:"Cassandra" intext:"DataStax"',d:'Apache Cassandra en puerto nativo 9042 expuesto sin autenticación habilitada.'},
{cat:'iot',q:'intitle:"Sonoff" OR intitle:"eWeLink" inurl:"/api/"',d:'Dispositivos Sonoff/eWeLink de automatización del hogar con API expuesta.'},
{cat:'cloud',q:'inurl:"management.azure.com" intext:"subscriptions" filetype:json',d:'Archivos JSON con suscripciones Azure y credenciales de gestión expuestos.'},
{cat:'network',q:'inurl:":9100" intitle:"Node Exporter"',d:'Node Exporter de Prometheus expuesto con métricas del sistema operativo completas.'},
{cat:'login',q:'inurl:"/confluence/login.action" intitle:"Confluence"',d:'Atlassian Confluence con login accesible, conocimiento corporativo expuesto.'},
{cat:'admin',q:'inurl:"/issues" intitle:"GitLab" intext:"Merge Request"',d:'GitLab con proyectos públicos que exponen código, issues y configuraciones.'},
{cat:'files',q:'intitle:"index of" ".password" OR "passwords.txt"',d:'Archivos con contraseñas en texto plano en directorios web expuestos.'},
{cat:'vuln',q:'inurl:"/includes/configure.php" intext:"DB_SERVER"',d:'Configuración de ZenCart con credenciales de base de datos en texto plano.'},
{cat:'info',q:'filetype:txt intext:"username:" intext:"password:" inurl:dump',d:'Dumps de credenciales en texto plano con usuarios y contraseñas.'},
{cat:'api',q:'inurl:"/api/health" intext:"database" intext:"connected"',d:'Endpoints de health con estado de conectividad de base de datos expuesto.'},
{cat:'files',q:'intitle:"index of" ".env.production" OR ".env.local"',d:'Archivos .env de producción y local con todas las variables de entorno sensibles.'},
{cat:'scada',q:'intitle:"CODESYS" inurl:":8080" OR inurl:":1217"',d:'Runtime CODESYS para PLC industrial expuesto, permite programar y controlar PLCs.'},
{cat:'medical',q:'inurl:"/Natus" OR inurl:"/neurology" intext:"EEG" inurl:"/patient"',d:'Sistemas de neurología con registros EEG de pacientes accesibles remotamente.'},
{cat:'code',q:'site:github.com "SONAR_TOKEN" OR "sonarqube_token"',d:'Tokens de SonarQube expuestos en código de GitHub para análisis estático.'},
{cat:'login',q:'intitle:"Netdata" inurl:":19999/dashboard.html"',d:'Dashboard Netdata de métricas del servidor expuesto sin autenticación.'},
{cat:'network',q:'inurl:":9200" intext:"cluster_name" intext:"version"',d:'Elasticsearch expuesto en puerto 9200 respondiendo a queries sin autenticación.'},
{cat:'files',q:'intitle:"index of" "authorized_keys" inurl:"/.ssh/"',d:'Claves SSH autorizadas expuestas que revelan qué claves tienen acceso al servidor.'},
{cat:'camera',q:'intitle:"LG NVR" inurl:"/html/login.cgi"',d:'Sistema NVR (grabador de red) de LG para cámaras de seguridad con login expuesto.'},
{cat:'vuln',q:'inurl:"/config/globalconfig" filetype:xml intext:"password"',d:'Archivos XML de configuración global con contraseñas en servidores de aplicaciones.'},
{cat:'admin',q:'inurl:":8080/WebConsole" intitle:"GlassFish"',d:'Consola de administración GlassFish/Payara expuesta para servidores Java EE.'},
{cat:'iot',q:'intitle:"Tuya" inurl:"/api/v1.0/token"',d:'APIs de Tuya para dispositivos IoT smart home con tokens accesibles.'},
{cat:'info',q:'filetype:json "sendgrid" "api_key" inurl:config',d:'Claves API de SendGrid en archivos JSON de configuración expuestos.'},
{cat:'database',q:'inurl:":5601" intitle:"Kibana" intext:"Index Patterns"',d:'Kibana para Elasticsearch expuesto con todos los índices y datos accesibles.'},
{cat:'files',q:'intitle:"index of" "wallet.dat" OR "bitcoin.conf"',d:'Billeteras Bitcoin y configuraciones de nodos expuestos en directorios abiertos.'},
{cat:'login',q:'inurl:"/jira/login.jsp" intitle:"JIRA"',d:'Atlassian Jira con login accesible para gestión de proyectos y tickets corporativos.'},
{cat:'api',q:'inurl:"/api/v1/configmaps" intext:"Kubernetes"',d:'ConfigMaps de Kubernetes accesibles via API sin autenticación con configuraciones.'},
{cat:'vuln',q:'inurl:"ajaxproxy" intext:"target=" inurl:".php"',d:'Proxies AJAX vulnerables a SSRF que permiten acceder a recursos internos.'},
{cat:'cloud',q:'inurl:"compute.googleapis.com" filetype:json "private_key_id"',d:'Credenciales de Compute Engine de GCP con private_key_id en JSON expuestos.'},
{cat:'network',q:'intitle:"HAProxy" inurl:"/haproxy?stats"',d:'Estadísticas de HAProxy load balancer expuestas con IPs de backend y estado.'},
{cat:'files',q:'intitle:"index of" "helm-values.yaml" OR "values.yaml"',d:'Valores de Helm charts expuestos con configuraciones de aplicaciones Kubernetes.'},
{cat:'code',q:'site:github.com "MONGODB_URI" "mongodb+srv://"',d:'URIs de conexión MongoDB Atlas con credenciales completas en repositorios GitHub.'},
{cat:'scada',q:'intitle:"Kepware" inurl:":57412" OR inurl:":49320"',d:'Servidor Kepware KEPServerEX para conectividad OPC de sistemas industriales.'},
{cat:'admin',q:'inurl:":8080/api/v1/modules" intitle:"Metabase"',d:'Metabase de análisis de datos expuesto con acceso a todas las queries y dashboards.'},
{cat:'info',q:'filetype:doc OR filetype:docx "username" "password" "VPN"',d:'Documentos Word con instrucciones VPN y credenciales embebidas expuestos.'},
{cat:'camera',q:'inurl:"/streaming/channels/1/httppreview" intitle:"IP Camera"',d:'Canales de streaming HTTP de cámaras IP Hikvision/compatibles sin autenticación.'},
{cat:'login',q:'intitle:"Rocket.Chat" inurl:"/login" intext:"Open Source"',d:'Rocket.Chat servidor de mensajería open source con panel de login accesible.'},
{cat:'database',q:'inurl:":15672/api/queues" intitle:"RabbitMQ"',d:'API de RabbitMQ Management expuesta listando todas las queues y mensajes.'},
{cat:'files',q:'intitle:"index of" "deployment.yaml" inurl:"/k8s/" OR inurl:"/kubernetes/"',d:'Archivos de deployment de Kubernetes con configuraciones de aplicaciones expuestos.'},
{cat:'vuln',q:'inurl:"/cgi-bin/register.cgi" OR inurl:"/cgi-bin/signup.cgi" intext:"email"',d:'Formularios de registro CGI que pueden ser vulnerables a inyecciones o spam.'},
{cat:'iot',q:'intitle:"WiZ" OR intitle:"WiZmote" inurl:"/api/wiz"',d:'Dispositivos de iluminación inteligente WiZ con API expuesta para control remoto.'},
{cat:'api',q:'inurl:"/api/v2/admin/users" intext:"email" intext:"admin"',d:'Endpoint de admin de APIs v2 que expone datos de usuarios administradores.'},
{cat:'files',q:'intitle:"index of" "pgpass" OR ".pgpass"',d:'Archivos .pgpass de PostgreSQL con contraseñas en texto plano para conexiones.'},
{cat:'network',q:'inurl:":4200" intitle:"Angular" intext:"Swagger"',d:'Aplicaciones Angular con Swagger expuesto revelando APIs internas del backend.'},
{cat:'admin',q:'inurl:":8161" intitle:"ActiveMQ" intext:"Broker"',d:'Panel admin de ActiveMQ con información del broker y colas de mensajes.'},
{cat:'code',q:'site:github.com "REACT_APP_API_KEY" OR "NEXT_PUBLIC_API_KEY"',d:'Claves API de React/Next.js expuestas en variables de entorno públicas en GitHub.'},
{cat:'medical',q:'inurl:"/cgi-bin/diagnose" intitle:"medical" intext:"patient_id"',d:'Scripts de diagnóstico médico con IDs de pacientes accesibles remotamente.'},
{cat:'scada',q:'intitle:"ICONICS" inurl:"/genesis64"',d:'Suite SCADA ICONICS Genesis64 para automatización industrial con acceso web.'},
{cat:'files',q:'intitle:"index of" "id_ed25519" inurl:"/.ssh/"',d:'Claves privadas Ed25519 SSH expuestas en directorios .ssh accesibles.'},
{cat:'cloud',q:'inurl:"us-east-1.linodeobjects.com" filetype:sql',d:'Bases de datos SQL en Linode Object Storage con acceso público habilitado.'},
{cat:'login',q:'inurl:"/oauth/authorize" intext:"client_id" intext:"response_type"',d:'Endpoints OAuth2 con parámetros visibles, útil para ataques de intercepción.'},
{cat:'info',q:'intext:"X-API-Key" filetype:log OR filetype:txt',d:'Cabeceras X-API-Key expuestas en archivos de log con claves de autenticación.'},
{cat:'vuln',q:'inurl:"?redirect=" OR inurl:"?next=" OR inurl:"?url="',d:'Parámetros de redirección que pueden ser vulnerables a Open Redirect.'},
{cat:'files',q:'intitle:"index of" "docker_auth_config" OR "dockerconfigjson"',d:'Credenciales de Docker Registry en archivos de configuración expuestos.'},
{cat:'api',q:'inurl:"/api/v1/nodes" intext:"allocatable" Kubernetes',d:'API de nodos Kubernetes que expone capacidad de recursos y configuración del cluster.'},
{cat:'admin',q:'inurl:":8888/lab" intitle:"JupyterLab" intext:"Python"',d:'JupyterLab expuesto en puerto 8888 sin autenticación, ejecución de código Python.'},
{cat:'database',q:'inurl:":8123" intitle:"ClickHouse"',d:'ClickHouse base de datos analítica expuesta en puerto 8123 sin autenticación.'},
{cat:'network',q:'intitle:"Gateways" inurl:"/cgi-bin/boardData102.php"',d:'Vulnerabilidad en gateways con boardData102.php que puede exponer credenciales.'},
{cat:'iot',q:'intitle:"Philips Hue" inurl:"/api" intext:"lights"',d:'API del hub Philips Hue expuesto localmente/remotamente para control de iluminación.'},
{cat:'code',q:'site:github.com "MAILGUN_API_KEY" OR "mailgun_secret"',d:'Claves API de Mailgun para envío de emails expuestas en repositorios de GitHub.'},
{cat:'login',q:'intitle:"FreeIPA" inurl:"/ipa/ui/" intext:"Identity"',d:'Servidor de identidad FreeIPA con IU web expuesta, gestiona usuarios corporativos.'},
{cat:'files',q:'intitle:"index of" ".terraform" inurl:"/.terraform/"',d:'Directorio .terraform con estado y configuración de infraestructura como código.'},
{cat:'vuln',q:'intext:"OGNL" intext:"Exception" inurl:".action"',d:'Errores OGNL de Struts2 que confirman vulnerabilidad a inyección de expresiones.'},
{cat:'info',q:'filetype:json "slack_hook" OR "slack_webhook" "https://hooks.slack.com"',d:'Webhooks de Slack en archivos JSON que permiten enviar mensajes a canales privados.'},
{cat:'admin',q:'inurl:":9000/project" intitle:"SonarQube"',d:'SonarQube para análisis de código expuesto con resultados de análisis de seguridad.'},
{cat:'medical',q:'inurl:"/api/fhir/R4/Observation" intext:"valueQuantity"',d:'Observaciones FHIR R4 con valores médicos de pacientes (presión, glucosa, etc).'},
{cat:'cloud',q:'site:s3.amazonaws.com "AWSLogs" "aws-cloudtrail"',d:'Logs de CloudTrail de AWS en S3 público con historial de todas las acciones AWS.'},
{cat:'scada',q:'intitle:"PI Web API" inurl:"/piwebapi/assetservers"',d:'PI Web API de OSIsoft expuesta para acceso a datos de series temporales industriales.'},
{cat:'files',q:'intitle:"index of" "yarn.lock" inurl:"/src/" OR inurl:"/app/"',d:'Yarn.lock con versiones exactas de dependencias que puede revelar paquetes vulnerables.'},
{cat:'network',q:'inurl:":9090/targets" intitle:"Prometheus"',d:'Lista de targets de Prometheus con IPs y endpoints internos de todos los servicios.'},
{cat:'login',q:'intitle:"Authentik" inurl:"/if/flow/default-authentication-flow/"',d:'Authentik proveedor de identidad open source con flujo de autenticación expuesto.'},
{cat:'api',q:'inurl:"/api/v1/persistentvolumes" intext:"Kubernetes"',d:'Volúmenes persistentes de Kubernetes expuestos via API con rutas de almacenamiento.'},
{cat:'database',q:'inurl:":9600" intitle:"Logstash" intext:"pipeline"',d:'Logstash API expuesta con configuración de pipelines y plugins activos.'},
{cat:'vuln',q:'inurl:"/etc/passwd" intext:"root:x:0:0"',d:'Servidores con LFI que permiten leer /etc/passwd directamente vía URL.'},
{cat:'code',q:'site:github.com "SHOPIFY_API_SECRET" OR "shopify_private_app"',d:'Secretos de apps privadas de Shopify expuestos en repositorios de GitHub.'},
{cat:'camera',q:'intitle:"Synology Surveillance" inurl:"/webman/login.cgi"',d:'Synology Surveillance Station con login para gestión de cámaras y grabaciones.'},
{cat:'info',q:'filetype:yaml "password:" "-" inurl:"ansible" OR inurl:"playbook"',d:'Playbooks Ansible con contraseñas en texto plano en variables de configuración.'},
{cat:'files',q:'intitle:"index of" "id_ecdsa" inurl:"/.ssh/"',d:'Claves privadas ECDSA SSH expuestas en directorios .ssh accesibles web.'},
{cat:'admin',q:'inurl:":3000/admin" intitle:"Gitea" intext:"Administration"',d:'Panel de administración de Gitea (Git self-hosted) expuesto al exterior.'},
{cat:'iot',q:'intitle:"Z-Wave" inurl:"/ZWaveAPI/Run"',d:'Z-Wave JS UI expuesto para control de dispositivos domóticos Z-Wave.'},
{cat:'medical',q:'inurl:"/Mediware/BCMA" OR inurl:"/pharmacy/" intext:"patient"',d:'Sistemas de administración de medicación con datos de pacientes expuestos.'},
{cat:'network',q:'inurl:":2019" intitle:"Caddy Admin"',d:'API de administración de Caddy web server expuesta para reconfiguración dinámica.'},
{cat:'login',q:'intitle:"Seafile" inurl:"/accounts/login/" intext:"File Sync"',d:'Seafile almacenamiento en la nube self-hosted con panel de login accesible.'},
{cat:'vuln',q:'inurl:"/phpconsole/" intitle:"PHP Console"',d:'PHP Console interactivo expuesto públicamente, permite ejecutar PHP arbitrario.'},
{cat:'files',q:'intitle:"index of" "service-account-token" inurl:"/secrets/"',d:'Tokens de service accounts de Kubernetes expuestos en directorios accesibles.'},
{cat:'code',q:'site:github.com "JIRA_API_TOKEN" OR "confluence_token"',d:'Tokens de API de Jira y Confluence expuestos en repositorios de código.'},
{cat:'api',q:'inurl:"/api/v1/events" intext:"Kubernetes" intext:"ADDED"',d:'API de eventos de Kubernetes que registra todas las acciones del cluster.'},
{cat:'scada',q:'intitle:"Emerson" inurl:"/DeltaV" intext:"DCS"',d:'Sistema de control distribuido DeltaV de Emerson para industria química/petroquímica.'},
{cat:'cloud',q:'inurl:"vault.azure.net" filetype:json "secretUri"',d:'URIs de secretos de Azure Key Vault expuestos en archivos de configuración JSON.'},
{cat:'database',q:'inurl:":9200" intext:"\"_index\"" intext:"\"_type\""',d:'Elasticsearch respondiendo a peticiones HTTP con estructura de índices visible.'},
{cat:'admin',q:'inurl:":8080/api/v1/status" intitle:"Harbor"',d:'Harbor Container Registry para Docker expuesto con API de estado accesible.'},
{cat:'files',q:'intitle:"index of" "Jenkinsfile" inurl:"/pipeline/"',d:'Jenkinsfiles de pipelines CI/CD que revelan procesos de build y posibles secretos.'},
{cat:'login',q:'inurl:"/login" intitle:"Zulip" intext:"Open-source team chat"',d:'Zulip chat corporativo con panel de login expuesto y canales accesibles.'},
{cat:'info',q:'intext:"AIzaSy" filetype:js OR filetype:json',d:'API keys de Google (prefijo AIzaSy) expuestas en JavaScript o JSON de aplicaciones.'},
{cat:'iot',q:'intitle:"Homebridge" inurl:":8581" intext:"Plugin"',d:'Homebridge para HomeKit expuesto con configuración de todos los dispositivos smart.'},
{cat:'vuln',q:'inurl:"/cgi-bin/admin.cgi" intext:"system" intext:"execute"',d:'CGIs de admin con posibilidad de ejecución de comandos del sistema.'},
{cat:'network',q:'inurl:":8443" intitle:"VMware" intext:"NSX"',d:'VMware NSX con interfaz de gestión expuesta para redes software-defined.'},
{cat:'medical',q:'inurl:"/MedicalRecord" OR inurl:"/PatientRecord" intext:"DOB"',d:'Registros médicos con fecha de nacimiento y datos de pacientes accesibles.'},
{cat:'files',q:'intitle:"index of" "ansible_vault" filetype:yml',d:'Archivos Ansible Vault con variables cifradas cuyo cifrado puede ser crackeado.'},
{cat:'code',q:'site:github.com "REDIS_URL" "redis://:@" password',d:'URLs de Redis con contraseñas en URIs de conexión expuestas en GitHub.'},
{cat:'admin',q:'inurl:":8080/api/rest/" intitle:"TeamCity"',d:'API REST de TeamCity de JetBrains para CI/CD expuesta sin autenticación.'},
{cat:'login',q:'intitle:"GitLab" inurl:"/users/sign_in" intext:"Community"',d:'GitLab Community Edition con registro público y código accesible.'},
{cat:'api',q:'inurl:"/api/v1/ingresses" intext:"Kubernetes" intext:"rules"',d:'Ingress controllers de Kubernetes que revelan todos los dominios y rutas internas.'},
{cat:'cloud',q:'inurl:"*.s3-website*.amazonaws.com" intitle:"index of"',d:'Sitios web de S3 con hosting estático habilitado y listado de archivos público.'},
{cat:'files',q:'intitle:"index of" "rootCA.key" OR "ca.key"',d:'Claves privadas de autoridades certificadoras (CA) expuestas en servidores web.'},
{cat:'scada',q:'intitle:"FactoryTalk" inurl:"/FactoryTalk" intext:"Rockwell"',d:'Suite FactoryTalk de Rockwell Automation para control de manufactura expuesta.'},
{cat:'database',q:'inurl:":4321" intitle:"pgAdmin" OR inurl:":5050/pgadmin4"',d:'pgAdmin 4 para PostgreSQL expuesto en puertos alternativos sin autenticación.'},
{cat:'info',q:'filetype:json "heroku" "DATABASE_URL" "postgresql"',d:'URLs de bases de datos Heroku PostgreSQL con credenciales completas expuestas.'},
{cat:'iot',q:'intitle:"DomoticZ" OR intitle:"Domoticz" inurl:":8080/json.htm"',d:'API JSON de Domoticz para domótica accesible con datos de todos los dispositivos.'},
{cat:'vuln',q:'inurl:"/debug" intext:"secret" intext:"Django"',d:'Endpoint de debug de Django que expone SECRET_KEY y configuración completa.'},
{cat:'network',q:'inurl:":8080/engine-status" intitle:"Apache"',d:'Estado del motor de Apache Tomcat con estadísticas de threads y conectores.'},
{cat:'admin',q:'inurl:":8080/console" intitle:"H2" intext:"H2 Console"',d:'Consola H2 Database en aplicaciones Java expuesta, permite SQL arbitrario.'},
{cat:'files',q:'intitle:"index of" "s3cfg" OR ".s3cfg"',d:'Configuración de s3cmd con access_key y secret_key de AWS en texto plano.'},
{cat:'code',q:'site:github.com "TRAVIS_CI_TOKEN" OR "CI_TOKEN" language:yaml',d:'Tokens de CI/CD de Travis CI y otros pipelines expuestos en archivos YAML.'},
{cat:'medical',q:'intitle:"McKesson" inurl:"/pharmacy/" intext:"prescription"',d:'Sistemas McKesson de farmacia con datos de prescripciones médicas expuestos.'},
{cat:'login',q:'intitle:"Nextcloud" inurl:"/index.php/login" intext:"cloud"',d:'Nextcloud personal con panel de login accesible, almacenamiento y colaboración.'},
{cat:'vuln',q:'inurl:"/xmlrpc" intext:"methodName" filetype:php',d:'XMLRPC de aplicaciones PHP expuesto, vectores para fuerza bruta y flood.'},
{cat:'api',q:'inurl:"/api/v1/serviceaccounts" intext:"secrets" Kubernetes',d:'Service accounts de Kubernetes con referencia a secretos accesibles via API.'},
{cat:'files',q:'intitle:"index of" "claude.json" OR "openai.json"',d:'Archivos de configuración de APIs de IA con claves expuestas en directorios web.'},
{cat:'scada',q:'intitle:"Proficy" inurl:"/historian" intext:"GE"',d:'Proficy Historian de GE Digital para datos de producción industrial.'},
{cat:'network',q:'inurl:":9696/v2.0/networks" intitle:"OpenStack"',d:'Neutron API de OpenStack con configuración de redes virtuales del cloud.'},
{cat:'admin',q:'inurl:":8080" intitle:"Nexus" intext:"Sonatype"',d:'Nexus Repository Manager de Sonatype expuesto para gestión de artefactos.'},
{cat:'info',q:'filetype:json "VAULT_ADDR" "VAULT_TOKEN" inurl:config',d:'Dirección y token de HashiCorp Vault expuestos en archivos de configuración JSON.'},
{cat:'camera',q:'inurl:"/cgi-bin/viewer/snap.cgi" intitle:"Network Camera"',d:'Captura instantánea de cámaras de red via CGI sin autenticación requerida.'},
{cat:'code',q:'site:github.com "SENTRY_DSN" "https://.*@sentry.io"',d:'DSNs de Sentry expuestos que revelan endpoints de error tracking y proyectos.'},
{cat:'iot',q:'intitle:"MQTT Explorer" inurl:":1883" intext:"broker"',d:'MQTT Explorer o brokers MQTT con interfaz web expuesto para IoT messaging.'},
{cat:'vuln',q:'inurl:"/ws" OR inurl:"/websocket" intext:"Upgrade: websocket"',d:'WebSockets expuestos sin autenticación que pueden permitir comunicación bidireccional.'},
{cat:'login',q:'intitle:"Matrix Synapse" inurl:"/_matrix/client" intext:"homeserver"',d:'Servidores Matrix Synapse de mensajería federada con API accesible.'},
{cat:'files',q:'intitle:"index of" "cert.pem" "key.pem" inurl:"/ssl/"',d:'Certificados y claves privadas SSL/TLS en directorios /ssl/ accesibles.'},
{cat:'database',q:'inurl:":4567" intitle:"Metabase" intext:"analytics"',d:'Metabase en puerto 4567 con acceso a dashboards y datos analíticos.'},
{cat:'admin',q:'inurl:"/admin/dashboard" intext:"Total Users" intext:"Posts"',d:'Dashboards de administración de CMSes con estadísticas completas del sistema.'},
{cat:'cloud',q:'inurl:"registry.hub.docker.com" "private" filetype:json',d:'Registros Docker privados con manifests accesibles revelando imágenes internas.'},
{cat:'medical',q:'inurl:"/pyxis/" OR inurl:"/Pyxis/" intext:"medication"',d:'Sistemas Pyxis de dispensación automatizada de medicamentos con acceso expuesto.'},
{cat:'files',q:'intitle:"index of" "Gemfile.lock" inurl:"/app/"',d:'Gemfile.lock de Ruby con versiones exactas de gems que pueden tener vulnerabilidades.'},
{cat:'info',q:'intext:"SHOPIFY_ACCESS_TOKEN" filetype:rb OR filetype:env',d:'Tokens de acceso de Shopify expuestos en código Ruby o archivos .env.'},
{cat:'network',q:'inurl:":8080/proxy" intitle:"Squid" intext:"Cache"',d:'Proxy Squid con interfaz de gestión expuesta, puede ser usado como proxy anónimo.'},
{cat:'scada',q:'intitle:"Wonderware" inurl:"/ArchestrA/Configuration"',d:'Configuración de ArchestrA de AVEVA/Wonderware para automatización industrial.'},
{cat:'login',q:'inurl:"/login" intitle:"Passbolt" intext:"password manager"',d:'Passbolt gestor de contraseñas corporativo open source con login expuesto.'},
{cat:'api',q:'inurl:"/api/v1/deployments" intext:"containers" Kubernetes',d:'Deployments de Kubernetes con configuración de contenedores y variables de entorno.'},
{cat:'vuln',q:'inurl:"upload.php" intext:"file type" intext:"success"',d:'Scripts PHP de subida de archivos con confirmación de éxito visible.'},
{cat:'files',q:'intitle:"index of" ".kube" "config"',d:'Directorio .kube con archivo config expuesto con credenciales del cluster Kubernetes.'},
{cat:'code',q:'site:github.com "DATADOG_API_KEY" OR "DD_API_KEY"',d:'API keys de Datadog expuestas en repositorios de GitHub para monitoreo.'},
{cat:'camera',q:'inurl:"/axis-cgi/bitmap/image.bmp" intitle:"AXIS"',d:'Imágenes BMP en tiempo real de cámaras AXIS accesibles directamente.'},
{cat:'admin',q:'inurl:":9000" intitle:"Portainer" intext:"Containers"',d:'Portainer en puerto 9000 con gestión de todos los contenedores Docker.'},
{cat:'iot',q:'intitle:"EmonCMS" inurl:"/emoncms/" intext:"Energy"',d:'EmonCMS para monitoreo de energía con datos de consumo eléctrico expuestos.'},
{cat:'database',q:'inurl:":7000" intitle:"Cassandra" intext:"Operations Center"',d:'Cassandra Operations Center para gestión del cluster NoSQL expuesto.'},
{cat:'files',q:'intitle:"index of" "secrets" filetype:yaml inurl:"/helm/"',d:'Secrets de Helm charts en YAML con credenciales de despliegues Kubernetes.'},
{cat:'medical',q:'inurl:"/Cerner/" OR inurl:"/PowerChart/" intext:"patient"',d:'Sistema Cerner PowerChart de registros médicos electrónicos con acceso remoto.'},
{cat:'network',q:'inurl:":2376" OR inurl:":2375" intitle:"Docker"',d:'API de Docker daemon expuesta sin TLS, control total de todos los contenedores.'},
{cat:'login',q:'intitle:"Bitwarden" inurl:"/login" intext:"Vault"',d:'Servidor Bitwarden self-hosted de gestión de contraseñas con login accesible.'},
{cat:'vuln',q:'inurl:"/cgi-bin/firmwareupgrade" intext:"firmware" intext:"upload"',d:'Endpoints de actualización de firmware de routers/IoT vulnerables a subida de archivos.'},
{cat:'code',q:'site:github.com "CLOUDINARY_URL" "cloudinary://"',d:'URLs de Cloudinary con API key y secret para CDN de imágenes expuestas.'},
{cat:'info',q:'filetype:json "token_type" "Bearer" "expires_at" inurl:oauth',d:'Tokens OAuth Bearer con fecha de expiración en archivos JSON de configuración.'},
{cat:'admin',q:'inurl:":9001" intitle:"MinIO" intext:"Object Storage"',d:'MinIO Object Storage con consola de administración expuesta en puerto 9001.'},
{cat:'files',q:'intitle:"index of" "GPG_PRIVATE_KEY" OR "PGP_PRIVATE_KEY"',d:'Claves privadas GPG/PGP expuestas en directorios web accesibles.'},
{cat:'api',q:'inurl:"/api/v1/secrets" intext:"stringData" Kubernetes',d:'Secretos de Kubernetes con datos en texto plano expuestos via API REST.'},
{cat:'scada',q:'intitle:"OSIsoft" inurl:"/PI/" intext:"Asset Framework"',d:'PI Asset Framework de OSIsoft para gestión de activos y datos industriales.'},
{cat:'network',q:'inurl:":4646" intitle:"Nomad" intext:"Jobs"',d:'HashiCorp Nomad con UI expuesta listando todos los jobs y workloads.'},
{cat:'camera',q:'inurl:"/getimage?ch=0" OR inurl:"/getimage?channel=0"',d:'Stream de cámaras IP que devuelven imágenes directas por canal sin autenticación.'},
{cat:'vuln',q:'intext:"sql" intext:"Syntax error" intext:"near" inurl:".php?id="',d:'Errores de sintaxis SQL que confirman inyección SQL en parámetros PHP.'},
{cat:'login',q:'inurl:"/oauth2/authorization" intext:"client_id"',d:'Flujos OAuth2 con client_ids visibles para análisis de autorizaciones.'},
{cat:'files',q:'intitle:"index of" "cloudformation" filetype:json',d:'Templates de CloudFormation con configuración completa de infraestructura AWS.'},
{cat:'medical',q:'inurl:"/openmrs/" intitle:"OpenMRS"',d:'OpenMRS sistema de registros médicos open source con login accesible.'},
{cat:'code',q:'site:github.com "NPM_TOKEN" OR "NPM_AUTH_TOKEN" language:yaml',d:'Tokens de autenticación npm en archivos YAML de CI/CD de GitHub.'},
{cat:'admin',q:'inurl:":8080/ui" intitle:"Tekton" intext:"Pipeline"',d:'Dashboard de Tekton Pipelines para Kubernetes expuesto sin autenticación.'},
{cat:'database',q:'inurl:":7080" intitle:"ClickHouse" intext:"Cluster"',d:'Clusters ClickHouse con interfaz HTTP de administración expuesta.'},
{cat:'iot',q:'intitle:"rtl_433" inurl:":433" OR inurl:"/events"',d:'Receptores rtl_433 para dispositivos RF 433MHz con datos de sensores en tiempo real.'},
{cat:'info',q:'filetype:json "private" "secret" "key" site:pastebin.com',d:'Secretos y claves privadas expuestos en Pastebin en formato JSON.'},
{cat:'vuln',q:'inurl:"/cgi-bin/diagnostic.cgi" intext:"ping"',d:'CGI de diagnóstico con ping que puede ser vulnerable a OS command injection.'},
{cat:'network',q:'inurl:":8083" intitle:"Kapacitor" intext:"InfluxDB"',d:'Kapacitor para procesamiento de datos de InfluxDB expuesto sin autenticación.'},
{cat:'files',q:'intitle:"index of" "config.yaml" inurl:"/prometheus/"',d:'Configuración YAML de Prometheus con targets, alertas y reglas de scrapeo.'},
{cat:'code',q:'site:github.com "ALGOLIA_API_KEY" OR "ALGOLIA_ADMIN_KEY"',d:'API keys de administración de Algolia expuestas en repositorios de código.'},
{cat:'admin',q:'inurl:":8080/api/v4/projects" intitle:"GitLab"',d:'API v4 de GitLab expuesta para acceso a proyectos, código y configuraciones.'},
{cat:'medical',q:'inurl:"/allscripts/" OR inurl:"/Allscripts/" intext:"EMR"',d:'Sistema Allscripts de registros médicos electrónicos con acceso remoto.'},
{cat:'scada',q:'intitle:"Intouch Access Anywhere" inurl:"/AccessAnywhere/"',d:'InTouch Access Anywhere de AVEVA para acceso remoto a HMIs industriales.'},
{cat:'files',q:'intitle:"index of" "secrets.env" OR ".secrets"',d:'Archivos de secretos de entorno expuestos con variables sensibles de aplicaciones.'},
{cat:'login',q:'intitle:"Keycloak Administration Console" inurl:"/auth/admin"',d:'Consola de administración de Keycloak para gestión de realms y usuarios SSO.'},
{cat:'api',q:'inurl:"/api/v1/persistentvolumeclaims" intext:"storageClassName"',d:'PVCs de Kubernetes con información de almacenamiento persistente expuestos.'},
{cat:'vuln',q:'inurl:"?order=" intext:"ORDER BY" inurl:".php"',d:'Parámetros de ordenación SQL potencialmente inyectables en aplicaciones PHP.'},
{cat:'iot',q:'intitle:"Vera" inurl:"/port_3480" OR inurl:"/data_request"',d:'Controlador domótico Vera con interfaz web expuesta para control de dispositivos.'},
{cat:'info',q:'intext:"eyJ" intext:"alg" intext:"typ" filetype:json',d:'Tokens JWT completos en archivos JSON con header y payload Base64 expuestos.'},
{cat:'cloud',q:'inurl:"gcr.io" intitle:"Container Registry" intext:"layers"',d:'Google Container Registry con capas de imágenes Docker privadas accesibles.'},
{cat:'database',q:'inurl:":8080/db/console" OR inurl:":8080/h2-console"',d:'Consolas H2 en aplicaciones Spring Boot expuestas para ejecución SQL.'},
{cat:'network',q:'intitle:"Envoy Admin" inurl:":9901/config_dump"',d:'Envoy proxy admin expuesto con configuración completa del service mesh.'},
{cat:'admin',q:'inurl:":5000" intitle:"Flask" intext:"Debug"',d:'Aplicaciones Flask con modo debug activo, permite ejecución de código remoto.'},
{cat:'files',q:'intitle:"index of" "chart.yaml" inurl:"/charts/"',d:'Helm charts con metadatos de versiones de aplicaciones Kubernetes.'},
{cat:'camera',q:'inurl:"/video.mjpg" OR inurl:"/video.cgi" intext:"camera"',d:'Streams MJPEG de cámaras de seguridad accesibles directamente sin auth.'},
{cat:'login',q:'intitle:"OnlyOffice" inurl:"/login" intext:"Document Server"',d:'OnlyOffice Document Server con acceso a documentos corporativos expuesto.'},
{cat:'vuln',q:'inurl:"/server-status" intitle:"Apache" intext:"requests currently being processed"',d:'Estado del servidor Apache con IPs de clientes, URLs activas y workers.'},
{cat:'medical',q:'inurl:"/mobiledoc/" OR inurl:"/docStation/" intext:"patient"',d:'Sistemas de documentación médica móvil con datos de pacientes accesibles.'},
{cat:'code',q:'site:github.com "TWILIO_ACCOUNT_SID" "TWILIO_AUTH_TOKEN"',d:'Credenciales Twilio completas en repositorios GitHub, cargos por SMS/llamadas.'},
{cat:'scada',q:'intitle:"Automgen" inurl:"/Runtime"',d:'Entorno runtime de Automgen para autómatas y control industrial expuesto.'},
{cat:'files',q:'intitle:"index of" "oci_config" OR "~/.oci/config"',d:'Configuración de Oracle Cloud CLI con credenciales y tenancy IDs expuestos.'},
{cat:'api',q:'inurl:"/api/v1/roles" intext:"rules" Kubernetes',d:'Roles RBAC de Kubernetes con permisos y reglas de autorización expuestos.'},
{cat:'network',q:'inurl:":4317" OR inurl:":4318" intitle:"OpenTelemetry"',d:'Collectors OpenTelemetry expuestos para recepción de traces y métricas.'},
{cat:'admin',q:'inurl:":3001" intitle:"Grafana" intext:"data source"',d:'Grafana en puerto 3001 con fuentes de datos y dashboards de monitoreo.'},
{cat:'info',q:'filetype:json "stripe_publishable_key" "stripe_secret_key"',d:'Claves de Stripe (publishable y secret) en JSON expuestas en servidores web.'},
{cat:'iot',q:'intitle:"OpenHAB" inurl:":8080/basicui"',d:'openHAB Basic UI expuesto para control de todos los dispositivos del hogar.'},
{cat:'vuln',q:'inurl:"/wp-content/debug.log" filetype:log',d:'Log de debug de WordPress con errores, rutas absolutas y datos del sistema.'},
{cat:'files',q:'intitle:"index of" "vault-config.hcl" OR "vault.hcl"',d:'Configuración de HashiCorp Vault con backends de almacenamiento y listeners.'},
{cat:'login',q:'intitle:"Minio" inurl:":9000/minio/login"',d:'Panel de login de MinIO S3-compatible expuesto para acceso a objetos almacenados.'},
{cat:'code',q:'site:github.com "GOOGLE_APPLICATION_CREDENTIALS" filetype:json',d:'Credenciales de aplicaciones Google en JSON expuestas en repositorios públicos.'},
{cat:'database',q:'inurl:":28015" intitle:"RethinkDB"',d:'RethinkDB en puerto 28015 expuesto con interfaz web de administración.'},
{cat:'medical',q:'inurl:"/labcorp/" OR inurl:"/LabCorp/" intext:"result"',d:'Portales de resultados de laboratorio con datos de exámenes médicos accesibles.'},
{cat:'network',q:'inurl:":6443" intext:"Kubernetes" intext:"server"',d:'API server de Kubernetes en puerto 6443 con configuración del cluster expuesta.'},
{cat:'admin',q:'inurl:":8080" intitle:"WildFly" OR intitle:"JBoss"',d:'Servidores de aplicaciones WildFly/JBoss con consola de gestión expuesta.'},
{cat:'files',q:'intitle:"index of" "gcloud" "credentials" filetype:json',d:'Credenciales de Google Cloud gcloud en formato JSON expuestas.'},
{cat:'vuln',q:'inurl:"/xmlrpc.php?rsd" intext:"RSD" intext:"WordPress"',d:'RSD de WordPress que confirma XMLRPC habilitado para ataques de fuerza bruta.'},
{cat:'scada',q:'intitle:"PTC ThingWorx" inurl:"/Thingworx/Composer"',d:'Plataforma IoT industrial ThingWorx de PTC para conectividad de máquinas.'},
{cat:'camera',q:'inurl:"/GetOneShot?channel=0" OR inurl:"/GetOneShot?ch=0"',d:'Cámaras con endpoint GetOneShot que captura imagen actual sin autenticación.'},
{cat:'api',q:'inurl:"/api/v1/namespaces/default/secrets" intext:"data"',d:'Secretos del namespace default de Kubernetes con datos codificados en Base64.'},
{cat:'cloud',q:'inurl:"ecr.amazonaws.com" intext:"repository" filetype:json',d:'Amazon ECR con repositorios de imágenes Docker privadas potencialmente accesibles.'},
{cat:'info',q:'intext:"rsa_private_key" OR intext:"dsa_private_key" filetype:php',d:'Claves privadas RSA/DSA hardcodeadas en código PHP fuente.'},
{cat:'login',q:'inurl:"/wp-admin/setup-config.php" intitle:"WordPress"',d:'WordPress en proceso de instalación, permite crear admin propio si no está instalado.'},
{cat:'iot',q:'intitle:"Blynk" inurl:":8080" intext:"dashboard"',d:'Servidor Blynk de IoT con dashboard expuesto para control de dispositivos.'},
{cat:'database',q:'inurl:":9600" intitle:"ElasticSearch" intext:"nodes"',d:'API de nodos Elasticsearch que revela configuración del cluster de búsqueda.'},
{cat:'files',q:'intitle:"index of" "cloud-init" OR "user-data" filetype:yaml',d:'Archivos cloud-init de inicialización de VMs con scripts de configuración.'},
{cat:'code',q:'site:github.com "MAILCHIMP_API_KEY" OR "mc_api_key"',d:'API keys de Mailchimp para campañas de email marketing expuestas en GitHub.'},
{cat:'admin',q:'inurl:":8088" intitle:"Druid" intext:"Apache Druid"',d:'Apache Druid base de datos analítica en tiempo real expuesta sin autenticación.'},
{cat:'medical',q:'inurl:"/RadiologyInformation/" OR inurl:"/RIS/" intext:"radiology"',d:'Sistemas de Información Radiológica con estudios y datos de pacientes.'},
{cat:'network',q:'inurl:":179" intext:"BGP" OR inurl:"/bgp/status"',d:'Routers con estado BGP accesible, revela tablas de enrutamiento y peers.'},
{cat:'vuln',q:'inurl:"/cgi-bin/genie.cgi" intext:"Netgear" intext:"command"',d:'CGI de Netgear vulnerable a command injection sin autenticación previa.'},
{cat:'files',q:'intitle:"index of" "settings.py" inurl:"/django/"',d:'Settings.py de Django con SECRET_KEY, DATABASES y configuración completa.'},
{cat:'login',q:'intitle:"Loki" inurl:":3100" intext:"Grafana Loki"',d:'Grafana Loki para agregación de logs expuesto con todas las queries disponibles.'},
{cat:'api',q:'inurl:"/api/v2/tasks" intext:"flux" intext:"InfluxDB"',d:'API de InfluxDB 2.0 con tareas Flux expuestas para procesamiento de datos.'},
{cat:'scada',q:'intitle:"GE Cimplicity" inurl:"/CIMPLICITY"',d:'Sistema SCADA Cimplicity de GE para control industrial y HMI.'},
{cat:'files',q:'intitle:"index of" "aliyun" "credentials" filetype:ini',d:'Credenciales de Alibaba Cloud CLI en archivos INI expuestos en servidores.'},
{cat:'code',q:'site:github.com "HEROKU_API_KEY" language:ruby',d:'API keys de Heroku expuestas en código Ruby de repositorios públicos.'},
{cat:'camera',q:'intitle:"Bosch Security" inurl:"/live.sdp"',d:'Cámaras Bosch Security con streams RTSP directos accesibles desde Internet.'},
{cat:'admin',q:'inurl:":8001/api/v1" intitle:"Kubernetes"',d:'API de Kubernetes en puerto 8001 con proxy kubectl expuesto localmente/remotamente.'},
{cat:'info',q:'filetype:pem "CERTIFICATE" "PRIVATE KEY" inurl:"/certs/"',d:'Certificados PEM con claves privadas incluidas en directorios de certificados.'},
{cat:'database',q:'inurl:":4001" intitle:"etcd"',d:'etcd de Kubernetes en puerto 4001 expuesto con todos los datos del cluster.'},
{cat:'iot',q:'intitle:"Loxone" inurl:"/web/" intext:"Miniserver"',d:'Miniserver Loxone de automatización de edificios con interfaz web expuesta.'},
{cat:'vuln',q:'inurl:"/phpliteadmin.php" intitle:"phpLiteAdmin"',d:'phpLiteAdmin para SQLite expuesto, permite gestión completa de bases de datos SQLite.'},
{cat:'network',q:'inurl:":9187" intext:"postgresql" intext:"metrics"',d:'PostgreSQL Exporter de Prometheus con métricas de todas las bases de datos.'},
{cat:'login',q:'intitle:"Vault by HashiCorp" inurl:"/ui/vault/secrets"',d:'Vault secrets engine expuesto con motor de secretos accesible desde la UI.'},
{cat:'files',q:'intitle:"index of" "kubeseal" OR "sealed-secret.yaml"',d:'Sealed Secrets de Kubernetes que aunque cifrados revelan estructura de secretos.'},
{cat:'code',q:'site:github.com "AWS_DEFAULT_REGION" "AWS_ACCESS_KEY_ID" filetype:env',d:'Variables AWS completas con región, access key y secret en archivos .env.'},
{cat:'medical',q:'inurl:"/drchrono/" OR inurl:"/DrChrono/" intext:"patient"',d:'Sistema DrChrono de gestión de prácticas médicas con datos clínicos.'},
{cat:'admin',q:'inurl:":8080/api/v1/info" intitle:"Argo CD"',d:'API de Argo CD para GitOps de Kubernetes expuesta con info del servidor.'},
{cat:'files',q:'intitle:"index of" "application.yml" "spring.security"',d:'Configuración de Spring Security con providers de autenticación expuesta.'},
{cat:'api',q:'inurl:"/api/v1/clusterroles" intext:"verbs" Kubernetes',d:'ClusterRoles de Kubernetes con privilegios de cluster expuestos via API.'},
{cat:'scada',q:'intitle:"COPA-DATA" inurl:"/zenon"',d:'Sistema SCADA zenon de COPA-DATA para automatización industrial expuesto.'},
{cat:'vuln',q:'inurl:"/cgi-bin/luci/;stok=/rpc" intext:"MiWiFi"',d:'Routers Xiaomi MiWiFi vulnerables a bypass de autenticación en LuCI.'},
{cat:'network',q:'inurl:":4194" intitle:"cAdvisor" intext:"Container Advisor"',d:'cAdvisor de Google expuesto con métricas de contenedores Docker en tiempo real.'},
{cat:'login',q:'intitle:"Plex" inurl:"/web/" intext:"Sign In"',d:'Servidor Plex Media Server con acceso web expuesto para streaming de multimedia.'},
{cat:'database',q:'inurl:":2181" intext:"ZooKeeper" OR inurl:"/exhibitor/v1"',d:'Apache ZooKeeper expuesto en puerto 2181 sin autenticación para coordinación.'},
{cat:'files',q:'intitle:"index of" "azure-pipelines.yml" inurl:"/azure/"',d:'Pipelines de Azure DevOps con configuración de CI/CD y posibles secretos.'},
{cat:'code',q:'site:github.com "OKTA_API_TOKEN" OR "okta_token"',d:'Tokens de API de Okta expuestos que dan control sobre identidad y acceso.'},
{cat:'camera',q:'inurl:"/cgi-bin/mjpg/video.cgi?channel=0" intitle:"IPCamera"',d:'Cámaras IP con streaming MJPEG por channel CGI accesibles sin credenciales.'},
{cat:'admin',q:'inurl:":8080/hawtio" intitle:"hawtio"',d:'hawtio consola de administración Java expuesta para monitoreo JVM y Camel.'},
{cat:'medical',q:'inurl:"/Medispan/" OR inurl:"/DrFirst/" intext:"medication"',d:'Sistemas de gestión de medicación con datos de prescripciones accesibles.'},
{cat:'info',q:'intext:"Authorization: AWS4-HMAC-SHA256" filetype:log',d:'Logs con cabeceras de autenticación AWS SigV4 que revelan Access Key IDs.'},
{cat:'iot',q:'intitle:"Wink Hub" inurl:"/hub/" intext:"devices"',d:'Hub Wink de domótica con lista de dispositivos conectados accesible.'},
{cat:'vuln',q:'inurl:"/api/v1/debug" intext:"trace" intext:"stack"',d:'Endpoints de debug de APIs que exponen stack traces y información interna.'},
{cat:'files',q:'intitle:"index of" "ibm_cloud" OR "ibmcloud" filetype:json',d:'Credenciales de IBM Cloud en archivos JSON expuestos en servidores web.'},
{cat:'login',q:'intitle:"Tandoor" inurl:":8080" intext:"Recipe"',d:'Gestor de recetas Tandoor expuesto, aunque trivial, ejemplo de apps sin auth.'},
{cat:'network',q:'inurl:":9091" intext:"pushgateway" intitle:"Prometheus"',d:'Prometheus Pushgateway para métricas batch expuesto con datos de jobs.'},
{cat:'database',q:'inurl:":7000/storage/v1" intitle:"Supabase"',d:'API de almacenamiento Supabase expuesta con acceso a buckets de archivos.'},
{cat:'admin',q:'inurl:":8080/console/login/LoginForm.jsp" intitle:"WebLogic"',d:'Consola de WebLogic Server con formulario de login accesible para RCE histórico.'},
{cat:'code',q:'site:github.com "AZURE_STORAGE_CONNECTION_STRING"',d:'Cadenas de conexión de Azure Storage con claves de acceso a blobs expuestas.'},
{cat:'files',q:'intitle:"index of" "renovate.json" ".renovaterc"',d:'Configuración de Renovate con tokens de repositorios para actualización automática.'},
{cat:'vuln',q:'inurl:"/cgi-bin/webcm" intext:"Sagem" OR intext:"Siemens"',d:'Módem/router Sagem con WebCM vulnerable a command injection.'},
{cat:'scada',q:'intitle:"Siemens SINEMA" inurl:"/sinema"',d:'Siemens SINEMA Remote Connect para gestión remota de redes industriales.'},
{cat:'api',q:'inurl:"/api/v1/configmaps/kube-proxy" intext:"kubeconfig"',d:'ConfigMap de kube-proxy de Kubernetes con configuración de red del cluster.'},
{cat:'medical',q:'inurl:"/PatientPortal/" OR inurl:"/MyChart/" intext:"health"',d:'Portales de salud para pacientes con acceso a historial médico personal.'},
{cat:'cloud',q:'inurl:"appspot.com" intext:".env" filetype:txt',d:'Archivos .env en App Engine expuestos con variables de entorno de la aplicación.'},
{cat:'info',q:'filetype:xml "apikey" "secretkey" inurl:"/config/"',d:'Claves API y secretas en archivos XML de configuración expuestos en web.'},
{cat:'login',q:'intitle:"Navidrome" inurl:":4533" intext:"Music Server"',d:'Servidor de música Navidrome con panel de login y biblioteca musical expuesta.'},
{cat:'files',q:'intitle:"index of" "ansible.cfg" inurl:"/ansible/"',d:'Configuración de Ansible con credenciales SSH y configuración de inventario.'},
{cat:'network',q:'inurl:":9093" intitle:"Prometheus Alertmanager" intext:"Silences"',d:'Alertmanager con UI de silencios y alertas activas del sistema expuesto.'},
{cat:'vuln',q:'inurl:"/cgi-bin/firmwarecfg" intext:"D-Link" intext:"upload"',d:'D-Link con endpoint de firmware vulnerable a upload de archivos arbitrarios.'},
{cat:'database',q:'inurl:":6379" intext:"NOAUTH" OR intext:"redis_version"',d:'Redis respondiendo en puerto 6379 confirmando ausencia de autenticación.'},
{cat:'admin',q:'inurl:":8080/manage/info" intitle:"Spring Boot"',d:'Spring Boot Actuator /info endpoint expuesto con metadatos de la aplicación.'},
{cat:'camera',q:'intitle:"MOBOTIX" inurl:"/control/userimage.html"',d:'Cámaras MOBOTIX de alta resolución con imágenes de usuario accesibles.'},
{cat:'code',q:'site:github.com "AIRTABLE_API_KEY" OR "airtable_token"',d:'API keys de Airtable expuestas en repositorios GitHub para acceso a bases de datos.'},
{cat:'iot',q:'intitle:"Grocy" inurl:":9283" OR inurl:"/grocy/"',d:'Grocy para gestión de hogar expuesto con inventario y datos personales.'},
{cat:'files',q:'intitle:"index of" "DO_SPACES_KEY" OR "SPACES_SECRET"',d:'Credenciales de DigitalOcean Spaces en archivos expuestos en directorios web.'},
{cat:'vuln',q:'inurl:"/solr/admin/cores?action=STATUS"',d:'Apache Solr admin API sin autenticación que lista todos los cores y configuraciones.'},
{cat:'network',q:'inurl:":8500" intitle:"HAProxy" intext:"Statistics Report"',d:'Reporte de estadísticas de HAProxy con estado de backends y conexiones.'},
{cat:'medical',q:'inurl:"/Veeva/" OR inurl:"/veeva/" intext:"clinical"',d:'Sistemas Veeva para ensayos clínicos con datos de investigación médica.'},
{cat:'login',q:'intitle:"Jellyfin" inurl:"/web/#/startserver" intext:"Media"',d:'Servidor multimedia Jellyfin con setup o login expuesto públicamente.'},
{cat:'admin',q:'inurl:":8080/management/health" intext:"status" Spring',d:'Spring Boot Management endpoint con estado de salud de todos los componentes.'},
{cat:'info',q:'filetype:json "MAILJET_API_KEY" OR "mailjet_secret"',d:'Credenciales de Mailjet para envío de emails en archivos JSON expuestos.'},
{cat:'files',q:'intitle:"index of" "google-services.json"',d:'Archivo google-services.json de Android con API keys, Project ID y config de Firebase.'},
{cat:'code',q:'site:github.com "AMPLITUDE_API_KEY" language:js',d:'API keys de Amplitude Analytics expuestas en JavaScript de repositorios GitHub.'},
{cat:'api',q:'inurl:"/api/v1/pods/log" intext:"container" Kubernetes',d:'Logs de contenedores de Kubernetes accesibles via API sin autenticación.'},
{cat:'scada',q:'intitle:"Prodigy" OR intitle:"ProdigyCSS" inurl:"/css/"',d:'Sistemas de control de subestaciones eléctricas Prodigy expuestos.'},
];

// =============================================
// RENDER ENGINE
// =============================================
document.getElementById('total-count').textContent = DORKS.length;
document.getElementById('foot-count').textContent = DORKS.length;

const container = document.getElementById('dorks-container');
const categories = {};
DORKS.forEach((d,i) => {
  if(!categories[d.cat]) categories[d.cat] = [];
  categories[d.cat].push({...d, idx:i+1});
});

const catLabels = {
  files:'📁 ARCHIVOS EXPUESTOS', login:'🔐 PANELES DE LOGIN', vuln:'💉 VULNERABILIDADES',
  database:'🗄 BASES DE DATOS', camera:'📷 CÁMARAS IP', network:'🌐 DISPOSITIVOS DE RED',
  admin:'⚙ PANELES ADMIN', info:'🔎 INFORMACIÓN SENSIBLE', email:'📧 SERVIDORES EMAIL',
  code:'💻 CÓDIGO FUENTE', iot:'🏠 DISPOSITIVOS IOT', cloud:'☁ SERVICIOS CLOUD',
  api:'🔗 APIs EXPUESTAS', scada:'🏭 ICS/SCADA INDUSTRIAL', medical:'🏥 SISTEMAS MÉDICOS'
};

Object.keys(catLabels).forEach(cat => {
  if(!categories[cat]) return;
  const header = document.createElement('h2');
  header.className = 'section-header';
  header.textContent = catLabels[cat];
  header.dataset.cat = cat;
  container.appendChild(header);

  const grid = document.createElement('div');
  grid.className = 'dorks-grid';
  grid.dataset.cat = cat;

  categories[cat].forEach(d => {
    const card = document.createElement('div');
    card.className = 'dork-card';
    card.dataset.cat = d.cat;
    card.dataset.query = d.q.toLowerCase();
    card.dataset.desc = d.d.toLowerCase();

    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(d.q)}`;
    card.innerHTML = `
      <span class="dork-num">#${String(d.idx).padStart(3,'0')}</span>
      <span class="dork-category cat-${d.cat}">${d.cat.toUpperCase()}</span>
      <div class="dork-query">${escapeHtml(d.q)}</div>
      <div class="dork-desc">${escapeHtml(d.d)}</div>
      <div class="dork-actions">
        <button class="btn-copy" onclick="copyDork(this,'${escapeSingle(d.q)}')">[ COPIAR ]</button>
        <a class="btn-search" href="${searchUrl}" target="_blank" rel="noopener">[ BUSCAR ]</a>
      </div>
    `;
    grid.appendChild(card);
  });
  container.appendChild(grid);
});

function escapeHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function escapeSingle(s){ return s.replace(/'/g,"\\'"); }

// =============================================
// FILTER + SEARCH
// =============================================
let activeCategory = 'all';
const searchInput = document.getElementById('search-input');
const visibleCount = document.getElementById('visible-count');
const noResults = document.getElementById('no-results');

function applyFilters() {
  const q = searchInput.value.toLowerCase().trim();
  let visible = 0;

  document.querySelectorAll('.dork-card').forEach(card => {
    const catMatch = activeCategory === 'all' || card.dataset.cat === activeCategory;
    const searchMatch = !q || card.dataset.query.includes(q) || card.dataset.desc.includes(q);
    if(catMatch && searchMatch){ card.classList.remove('hidden'); visible++; }
    else card.classList.add('hidden');
  });

  document.querySelectorAll('.section-header, .dorks-grid').forEach(el => {
    const cat = el.dataset.cat;
    const cardsInSection = document.querySelectorAll(`.dork-card:not(.hidden)[data-cat="${cat}"]`).length;
    el.style.display = (activeCategory === 'all' || cat === activeCategory) && cardsInSection > 0 ? '' : 'none';
  });

  visibleCount.textContent = visible;
  noResults.classList.toggle('show', visible === 0);
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.cat;
    applyFilters();
  });
});

searchInput.addEventListener('input', applyFilters);
applyFilters();

// =============================================
// COPY TO CLIPBOARD
// =============================================
function copyDork(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    const toast = document.getElementById('toast');
    btn.textContent = '[ ✓ COPIADO ]';
    btn.style.color = '#ff0000';
    toast.classList.add('show');
    setTimeout(()=>{ toast.classList.remove('show'); btn.textContent='[ COPIAR ]'; btn.style.color=''; }, 2000);
  });
}

// =============================================
// SCROLL PROGRESS
// =============================================
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';
});

// =============================================
// TYPING EFFECT ON HEADER
// =============================================
const subtitle = document.querySelector('.subtitle');
const msg = '[ GOOGLE DORKING ARSENAL v3.0 ]';
let idx = 0;
subtitle.textContent = '';
function type() {
  if(idx < msg.length){ subtitle.textContent += msg[idx++]; setTimeout(type, 60); }
}
setTimeout(type, 1200);
