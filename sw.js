self.addEventListener('install', e => {
    console.log('sw install')
})

self.addEventListener('activate', e => {
    console.log('sw activate')
})

self.addEventListener('fetch', e => {
    // console.log('sw fetch')

    let url = e.request.url
    let method = e.request.method

    console.log(method,url)
    console.log(url.includes('estilos.css'))
    console.log(e.request)
    console.log('-----------------')

    let respuesta = fetch(e.request.url)
    if(url.includes('estilos.css')) {
        // respuesta = null
        respuesta = new Response(`
            body {
                background-color: palidpink;
            }

            .w-100 {
                width: 100%;
            }

            .w-10 {
                width: 10%;
            }

            .w-20 {
                width: 20%;
            }

            .w-30 {
                width: 30%;
            }

            .w-40 {
                width: 40%;
            }

            .ml-item {
                margin-left: 20px;
            }

            .contenedor {
                display: flex;
                justify-content: space-around;
                align-items: center;
            }

            .page-content {
                padding: 10px;
            }

            img{
                width: 100%;
                border-radius: 50%;
                margin-bottom: 20px;
                min-width: 300px;
            }
        `, {
            headers: {
                'content-type' : 'text/css'
            }
        })
        e.respondWith(respuesta)
    }

    else if(url.includes('material.orange-deep_purple.min.css')){
        respuesta = fetch('https://code.getmdl.io/1.3.0/material.blue_grey-deep_orange.min.css')
        e.respondWith(respuesta)
    }

    // else if(url.includes('super.jpg')){
    //     respuesta = fetch('images/super2.jpg')
    // }

    else if(url.includes('main.js')){
        respuesta = fetch('https://frags1108.000webhostapp.com/main.js', {
            mode:"no-cors"
        })
        e.respondWith(respuesta)
    }

    else {
        // respuesta = fetch(url)
        e.respondWith(respuesta)
    }

    
})
