describe("HTTP Example", function() {
    it("GET Method", () =>{
        cy.request({
            method : "GET",
            url : "http://httpbin.org/get"
        }).then((response) =>{
            expect(response.body).have.property("url")
        })
    })

    it("POST Method", () =>{
        cy.request({
            method : "POST",
            url : "http://httpbin.org/post",
            body : {
                "name" : "Bao"
            }
        }).its("body").then((body) =>{
            expect(body).have.property("json");
            expect(body.json).to.deep.equal(
                {
                    "name" : "Bao"
                }
            )
        })
    })

    it("PUT Method", () =>{
        cy.request({
            method : "PUT",
            url : "http://httpbin.org/put",
            body : {
                "name": "Bao",
                "files" : {
                    "guide" : "pdf"
                }
            }
        }).its("body").then((body) =>{
            expect(body.json.name).equal("Bao");
            expect(body.json.files).to.be.deep.eql(
                {
                "guide" : "pdf"
                }
            );
        })
    })

    it("DELETE Method", () =>{
        cy.request({
            method : "DELETE",
            url : "http://httpbin.org/delete"
        }).then((response) =>{
            cy.log(response.body.json);
            expect(response.body.json).to.be.equal(null)
        })
    })
})