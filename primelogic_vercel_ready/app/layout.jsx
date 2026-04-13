import "./globals.css";

export const metadata = {
  title: "PrimeLogic AI",
  description: "Automatisiere dein Business mit KI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body><footer style={{
  marginTop: "80px",
  padding: "20px",
  borderTop: "1px solid #eee",
  textAlign: "center",
  fontSize: "14px"
}}>
  
  <a href="/impressum" style={{marginRight:"20px"}}>
    Impressum
  </a>

  <a href="/datenschutz">
    Datenschutz
  </a>

</footer>{children}</body>
    </html><script>
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=(...arguments)=>{if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="ELtyLX9FtSdvU-IMn7SdH";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
</script>
  );
}
