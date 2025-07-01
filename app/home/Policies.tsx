export default function Policies() {
  const policies = [
    {
      title: "Check-in",
      content: [
        {
          subtitle: "Available 24 hours",
          description:
            "Guests are required to show a photo identification and credit card upon check-in. You'll need to let the property know in advance what time you'll arrive.",
        },
      ],
    },
    {
      title: "Check-out",
      content: [
        {
          subtitle: "Available 24 hours",
          description: "",
        },
      ],
    },
    {
      title: "Cancellation/ prepayment",
      content: [
        {
          subtitle: "",
          description:
            "Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.",
        },
        {
          subtitle: "Child policies",
          description: "Children of any age are welcome.",
        },
        {
          subtitle: "",
          description:
            "Children 17 years and above will be charged as adults at this property. To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.",
        },
        {
          subtitle: "Cot and extra bed policies",
          description:
            "The number of extra beds allowed is dependent on the option you choose. Please check your selected option for more information.",
        },
        {
          subtitle: "",
          description: "There are no cots available at this property.",
        },
        {
          subtitle: "",
          description: "All extra beds are subject to availability.",
        },
      ],
    },
    {
      title: "Children and beds",
      content: [
        {
          subtitle: "",
          description: "There is no age requirement for check-in.",
        },
      ],
    },
    {
      title: "No age restriction",
      content: [
        {
          subtitle: "",
          description: "There is no age requirement for check-in.",
        },
      ],
    },
    {
      title: "Pets",
      content: [
        {
          subtitle: "",
          description: "Pets are not allowed.",
        },
      ],
    },
    {
      title: "Cash only",
      content: [
        {
          subtitle: "",
          description: "This property only accepts cash payments.",
        },
      ],
    },
  ]

  return (
    <div className="container ">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Policies</h1>

      <div className="border p-4 sm:p-6 ">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3  border-b border-gray-100 last:border-b-0"
          >
            {/* Policy Title - Left Column */}
            <div className="md:col-span-1 flex items-center py-[14px]">
              <h2 className="text-base font-medium text-gray-700 leading-relaxed ">{policy.title}</h2>
            </div>

            {/* Policy Content - Right Column */}
            <div className="md:col-span-2 space-y-3 py-[14px]" >
              {policy.content.map((item, itemIndex) => (
                <div key={itemIndex} className="space-y-1">
                  {item.subtitle && <h3 className="text-sm font-medium text-gray-900">{item.subtitle}</h3>}
                  {item.description && <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
