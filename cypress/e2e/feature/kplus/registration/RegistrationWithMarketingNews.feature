Feature: Register new kplus account
    In order to become kplus customer
    As a guest
    I want to buy the service and become a kplus customer

    @Register
    Scenario: Register new kplus account with marketing news
        Given the user opens kplus home page
        And the user completes packages selection with "K+Sport,K+Cinema" in kplus product page
        And the user completes hardware selection as "UHDBox" with addon "Multiscreen" in kplus hardware page
        And the user confirms order in kplus basket page
        When the user registers new account with following information in kplus registration page
            | firstName     | Bảo          |
            | lastName      | Trần         |
            | dob           | 14/01/1992   |
            | emailAtHost   | @getnada.com |
            | pin           | 6868         |
            | marketingNews | yes          |
        And the user updates the billing and shipping address wiht following information in kplus checkout order page
            | street                    | Kim Hoàng     |
            | no                        | 18            |
            | additionalAddress         | Ngõ 82        |
            | postCode                  | 100000        |
            | place                     | Vân Canh      |
            | deliveryAddress           | anoherAddress |
            | shippingFirstName         | Bảo           |
            | shippingLastName          | Trần          |
            | shippingStreet            | Kim Hoàng     |
            | shippingNo                | 11            |
            | shippingAdditionalAddress | Ngõ 82        |
            | shippingPostCode          | 100000        |
            | shippingPlace             | Vân Canh      |
        And the user updates payment method as "MB Bank" with following information in kplus checkout order page
            | accountHolder | Bao Tran         |
            | card number   | 9700222233334444 |
        And the user confirms order in kplus checkout order page
        Then the user sees the order information in kplus  thank you page
            | package          | hardware | addons      |
            | K+Sport,K+Cinema | UHDBox   | Multiscreen |