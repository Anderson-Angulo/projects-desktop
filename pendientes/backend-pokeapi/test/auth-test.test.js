const chai=require('chai')
const chaiHttp=require('chai-http')
const app = require('../app')

chai.use(chaiHttp)



describe("Suite de pruebas Auth",()=>{
  it("should return 401 when no jwt token available",(done)=>{
    chai.request(app)
    .get('/team')
    .end((err,res)=>{
      chai.assert.equal(res.statusCode,401)
      done()
    })
  })

  it("should return 200 when jwt is valid",(done)=>{
    chai.request(app)
    .post('/login')
    .end((err,res)=>{
      chai.request(app)
      .get('/team')
      .set('Authorization',`JWT ${res.body.token}`)
      .end((err,res)=>{
        chai.assert.equal(res.statusCode,200)
        done()
      })
      done()
    })
    
  })
})