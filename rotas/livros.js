const { Router } = require("express");
const { getLivro, getLivros, postLivro, patchLivro, deleteLivro } = require("../controladores/livros.js")

const router = Router();

router.get('/', getLivros)
router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)



module.exports = router