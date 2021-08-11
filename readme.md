# Implementar proyecto en Heroku


- Subi el proyecto a Heroku por medio de **GIT**.

- Desde el panel de Settings de Heroku grabé el **Puerto**, el **Facebook ID** y el **Facebook Secret** y los levanto en la app desde ```process.env```

- Agregue ```app.enable('trust proxy')``` en ```server.js``` para habilitar las peticiones desde Heroku ya que este usa un proxy y algunas peticiones dejaron de funcionar. El socket.io y la conexion a MongoDB no funcionaban y se soluciono agregando esa línea.
<br /><br />

### La URL del sitio es:

```
https://coder-alejandro.herokuapp.com
````
<br />
Pude ingresar con mi usuario de facebook, intente luego ingresar con otra pero al ser una app de prueba hubo que crear un usuario de testing con estos datos:

```
Nombre: test coder
E-mail: test_nxwswqr_coder@tfbnw.net
Pass: testcoder123
```

Otras URLs de prueba son:<br />
https://coder-alejandro.herokuapp.com/visitas<br />
https://coder-alejandro.herokuapp.com/cluster<br />