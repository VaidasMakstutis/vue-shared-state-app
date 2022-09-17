let store = {
    user: {
        name: "John Dee",
    },
};

new Vue({
    el: "#one",

    data: {
        foo: "bar",
        shared: store,
    },
});

new Vue({
    el: "#two",

    data: {
        foo: "other",
        shared: store,
    },
});
