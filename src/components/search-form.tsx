"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export function SearchForm() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex-1">
        <Input
          placeholder="Search by location, property name..."
          className="w-full"
          // prefix={<Search className="w-4 h-4 text-muted-foreground" />}
        />
      </div>
      <Select>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Property Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apartment">Apartment</SelectItem>
          <SelectItem value="villa">Villa</SelectItem>
          <SelectItem value="home">Home</SelectItem>
          <SelectItem value="office">Office</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Price Range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0-100k">$0 - $100,000</SelectItem>
          <SelectItem value="100k-200k">$100,000 - $200,000</SelectItem>
          <SelectItem value="200k-500k">$200,000 - $500,000</SelectItem>
          <SelectItem value="500k+">$500,000+</SelectItem>
        </SelectContent>
      </Select>
      <Button className="bg-primary hover:bg-primary/90 px-8">Search</Button>
    </div>
  )
}

