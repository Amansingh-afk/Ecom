class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    search() {
        const keyword = this.queryStr.keyword
            ? {
                name: {
                    $regex: this.queryStr.keyword,
                    $options: "i",
                }
            }
            : {};
        this.query = this.query.find({ ...keyword });
        return this;
    }

    filter() {
        this.queryCopy = { ...this.queryStr }

        const removeFields = ["keyword", "page", "limit"];
        removeFields.forEach((key) => delete this.queryCopy[key]);

        this.query = this.query.find(this.queryCopy);
        return this;
    }
};

module.exports = ApiFeatures