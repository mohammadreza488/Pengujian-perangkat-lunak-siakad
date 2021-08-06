describe('Login Pada SIAKAD', () => {
    it('Membuka halaman', () => {
      cy.visit('http://siakad.polinema.ac.id') // change URL to match your dev URL
    //   cy.get('#form_login > div.form-actions > button').click()
    })

    it('login dengan nama pengguna salah dan kata sandi salah', () => {
        cy.visit('http://siakad.polinema.ac.id') 
        cy.get('#username').type('iniusername')
        cy.get('#password').type('inipassword')
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah')
        
      })


      it('login dengan nama pengguna benar dan kata sandi salah', () => {
        cy.visit('http://siakad.polinema.ac.id') 
        cy.get('#username').type('1831710036')
        cy.get('#password').type('hshjshsjsh')
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah')
      })

      it('login dengan nama pengguna salah dan kata sandi benar', () => {
        cy.visit('http://siakad.polinema.ac.id') 
        cy.get('#username').type('polinemacampus')
        cy.get('#password').type('probolinggo')
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username / Password Salah')
      })

      it('login dengan nama pengguna kosong dan kata sandi kosong', () => {
        cy.visit('http://siakad.polinema.ac.id') 
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username harus diisi')
      })


      it('login dengan nama pengguna kosong dan kata sandi terisi', () => {
        cy.visit('http://siakad.polinema.ac.id') 
        cy.get('#password').type('probolinggo')
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Username harus diisi')
      })

      it('login dengan nama pengguna terisi dan kata sandi kosong', () => {
        cy.visit('http://siakad.polinema.ac.id') 
        cy.get('#username').type('1831710036')
        cy.get('#form_login > div.form-actions > button').click()
        cy.contains('Password harus diisi')
      })

      it('login dengan nama pengguna benar dan kata sandi benar', () => {
        cy.viewport(1280, 800)
        cy.visit('http://siakad.polinema.ac.id') 
        cy.get('#username').type('1831710036')
        cy.get('#password').type('probolinggo')
        cy.get('#chk_tampilkan').click()
        cy.get('#form_login > div.form-actions > button').click()
 
      })


    //   it('check reset password', () => {
    //     cy.visit('https://helpakademik.polinema.ac.id/') 
    //     cy.contains('Lupa Password?')
 
    //   })











})

