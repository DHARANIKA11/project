
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface SearchFormProps {
  onSearch: (rollNumber: string, dateOfBirth: string) => void;
  isLoading: boolean;
}

const SearchForm = ({ onSearch, isLoading }: SearchFormProps) => {
  const [rollNumber, setRollNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!rollNumber.trim()) {
      toast.error("Please enter your roll number");
      return;
    }
    
    if (!dateOfBirth) {
      toast.error("Please select your date of birth");
      return;
    }
    
    const formattedDate = format(dateOfBirth, "yyyy-MM-dd");
    onSearch(rollNumber, formattedDate);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="rollNumber">Roll Number</Label>
        <Input
          id="rollNumber"
          type="text"
          placeholder="Enter your roll number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          className="bg-white"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="dob">Date of Birth</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal bg-white",
                !dateOfBirth && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateOfBirth ? format(dateOfBirth, "PPP") : "Select your date of birth"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={dateOfBirth}
              onSelect={setDateOfBirth}
              initialFocus
              disabled={(date) => date > new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-education-600 hover:bg-education-700 text-white"
        disabled={isLoading}
      >
        {isLoading ? "Searching..." : "View Results"}
      </Button>
    </form>
  );
};

export default SearchForm;
