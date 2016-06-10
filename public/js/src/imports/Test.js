"use strict";

import $ from "../../vendor/jquery/dist/jquery.min"
import _ from "../../vendor/lodash/dist/lodash.min"

class Test {
    constructor() {
        let test = [
            "Item 1",
            "Item 2",
            "Item 3",
            "Item 4",  
        ];

        $("body").append("Hello World.");

        let newList = "<ul>";
        _.each(test,(value) => {
            newList += `<li>${value}</li>`;
        });
        newList += "</ul>";

        $("body").append(newList);

        console.log("Hello World.");
    }
}

export default Test;