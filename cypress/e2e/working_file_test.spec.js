describe("", function(){
    it("Test Write File", () =>{
        // cy.writeFile("all_env_data.json", {"email":"baotq14@getnada.com"}, {flag: "a"})
        cy.readFile("all_env_data.json").then((list) =>{
            list.push({"name":"Trần Quốc Bảo", "gender":"male"});
            cy.writeFile("all_env_data.json", list);
        })
    })
    
})