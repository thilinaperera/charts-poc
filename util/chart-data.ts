const dummyData = [
    {
        business_id: 30178,
        price_rational: {
            amount_numerator: 857,
            amount_denominator: 100,
            currency: "GBP"
        },
        price_exchanged_rational: {
            amount_numerator: 857,
            amount_denominator: 100,
            currency: "GBP"
        },
        date: "2017-08-22"
    },
    {
        business_id: 30178,
        price_rational: {
            amount_numerator: 633,
            amount_denominator: 20,
            currency: "GBP"
        },
        price_exchanged_rational: {
            amount_numerator: 633,
            amount_denominator: 20,
            currency: "GBP"
        },
        date: "2018-04-27"
    },
    {
        business_id: 30178,
        price_rational: {
            amount_numerator: 9393,
            amount_denominator: 100,
            currency: "GBP"
        },
        price_exchanged_rational: {
            amount_numerator: 9393,
            amount_denominator: 100,
            currency: "GBP"
        },
        date: "2020-02-24"
    },
    {
        business_id: 30178,
        price_rational: {
            amount_numerator: 439,
            amount_denominator: 1,
            currency: "GBP"
        },
        price_exchanged_rational: {
            amount_numerator: 439,
            amount_denominator: 1,
            currency: "GBP"
        },
        date: "2021-08-05"
    }
];

export const getData = () => {
    const labels: string[] = [];
    const dataSet: Array<number> = [];
    dummyData.forEach((data) => {
        labels.push(data.date);
        dataSet.push(
            data.price_rational.amount_numerator /
            data.price_rational.amount_denominator
        );
    });
    return {
        labels,
        dataSet
    };
};
