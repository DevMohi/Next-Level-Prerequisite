import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 29.99,
      features: [
        "Access to gym during regular hours",
        "Free locker access",
        "1 personal training session per month",
        "Access to cardio and weight machines",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 49.99,
      features: [
        "24/7 gym access",
        "5 personal training sessions per month",
        "Access to group fitness classes",
        "Free towel service",
        "Access to cardio, weight, and functional training areas",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 69.99,
      features: [
        "24/7 gym access",
        "Unlimited personal training sessions",
        "Access to all group fitness classes",
        "Free towel and laundry service",
        "Access to spa and sauna",
        "Discounted guest passes",
      ],
    },
    {
      id: 4,
      name: "Family Plan",
      price: 99.99,
      features: [
        "24/7 access for up to 4 family members",
        "10 personal training sessions per month",
        "Access to family-oriented fitness classes",
        "Free towel service",
        "Access to spa, sauna, and kids' area",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption option={option} key={option.id}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
