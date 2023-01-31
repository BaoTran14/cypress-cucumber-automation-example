Feature: Product Selection
    Scenario: Product selection additional package
        Given the user opens "@TD:kplusUrl"
        And the user accesses kplus product page
        When the user selects package "K+Cinema" in kplus product page
        And the user clicks "cancel_button" in confim modal popup
        And the user selects package "K+Cinema" in kplus product page
        And the user clicks "select_all_button" in confim modal popup
        And the user goes to kplus hardware page from kplus product page
        And the user completes hardware selection as "UHDBox" with addon "MultiScreen" in kplus hardware page
        And the user confirms order in kplus basket page
        When the user registers new account with following information in kplus registration page
            | firstName   | Bảo          |
            | lastName    | Trần         |
            | dob         | 14/01/1992   |
            | emailAtHost | @getnada.com |
            | pin         | 6868         |
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
            | package  | hardware | addons      |
            | K+Cinema | UHDBox   | MultiScreen |