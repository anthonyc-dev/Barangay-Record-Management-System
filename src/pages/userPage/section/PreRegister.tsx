import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const preRegisterSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  birthDate: z.string().min(1, "Birthdate is required"),
  gender: z.enum(["Male", "Female"], "Gender is required"),
  address: z.string().min(2, "Address is required"),
  contactNumber: z.string().min(7, "Contact number must be at least 7 digits"),
  email: z.string().email("Invalid email address"),
});

type PreRegisterFormData = z.infer<typeof preRegisterSchema>;

const PreRegister = () => {
  const form = useForm<PreRegisterFormData>({
    resolver: zodResolver(preRegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      // gender: undefined,
      address: "",
      contactNumber: "",
      email: "",
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data: PreRegisterFormData) => {
    alert("Registration submitted!\n" + JSON.stringify(data, null, 2));
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleAlreadyHaveAccount = () => {
    navigate("/signin");
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://i0.wp.com/peoplaid.com/wp-content/uploads/2021/04/Lala-Municipal-Hall.jpg?resize=723%2C457&ssl=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 w-full">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="outline"
              type="button"
              onClick={handleBack}
              className="px-4 py-2"
            >
              &larr;
            </Button>
            <h2 className="text-2xl font-bold text-center flex-1">
              Pre-Register
            </h2>
            <div className="w-16" /> {/* Spacer to balance the flex row */}
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name fields in a row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Juan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Dela Cruz" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Birthdate and Gender in a row */}
              <div className="flex justify-between items-center md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Birthdate</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Address */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main St, City" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Contact Number and Email in a row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number</FormLabel>
                      <FormControl>
                        <Input placeholder="09123456789" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="juan@email.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full">
                Register
              </Button>
              <div className="flex justify-center mt-2">
                <span className="text-sm text-gray-600 mr-2">
                  Already have an account?
                </span>
                <Button
                  type="button"
                  variant="link"
                  className="p-0 h-auto text-blue-600"
                  onClick={handleAlreadyHaveAccount}
                >
                  Sign in
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default PreRegister;
