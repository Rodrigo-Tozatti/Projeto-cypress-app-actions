

Cypress.Commands.add('login', (usuario, senha) => {
    const fd = new formData()
    fd.append('log', usuario)
    fd.append('pwd', senha)
    fd.append('wp-submit', "Acessar")
    fd.append('redirect_to', `wp-admin`)
    fd.append('testcookie', 1)


    cy.request({
        url: 'wp-login.php',
        method: 'POST',
        body: fd
    }).then(resp => {
        resp.headers['set-cookie'].forEach(cookie => {
            const primeiraParte = cookie.split(';')[0]
            const dividir = primeiraParte.indexOf('=')
            const chave = primeiraParte.substring(0, dividir)
            const valor = primeiraParte.substring(dividir+1)
            cy.setCookie(chave, valor)
        })
    })
    cy.visit('wp.admin')
})