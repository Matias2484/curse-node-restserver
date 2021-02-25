const { response, request } = require('express');




const usuariosGet = (req = request, res = response) => {

    const { q, nombre, apikey } = req.query;

    res.json({

        msg: 'get API - controlador',
        q,
        nombre,
        apikey

    });

}
const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.json({

        msg: 'Post API - UsuariosPost',
        body
    });

}
const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({

        msg: 'Put API - UsuariosPut',
        id
    });

}

const usuariosPatch = (req, res = response) => {



    res.json({

        msg: 'Patch API - UsuariosPatch',

    });

}
const usuariosDelete = (req, res = response) => {



    res.json({

        msg: 'Delete API - UsuariosDelete'
    });

}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}