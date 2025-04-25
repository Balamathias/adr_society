import { Building2, Home, Landmark, HotelIcon as Villa } from "lucide-react"

const propertyTypes = [
  {
    icon: Building2,
    title: "Apartment",
    count: "123 Properties",
  },
  {
    icon: Villa,
    title: "Villa",
    count: "123 Properties",
  },
  {
    icon: Home,
    title: "Home",
    count: "123 Properties",
  },
  {
    icon: Landmark,
    title: "Office",
    count: "123 Properties",
  },
]

export function PropertyTypes() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-4">Property Types</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Find your perfect property from our wide range of options
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {propertyTypes.map((type) => (
            <div
              key={type.title}
              className="flex flex-col items-center p-6 border rounded-lg hover:border-primary transition-colors"
            >
              <type.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{type.title}</h3>
              <p className="text-sm text-muted-foreground">{type.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

