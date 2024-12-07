import {
  Fieldset,
  Stack,
  Input,
  Button,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  createListCollection,
  Card,
  CardBody,
  Box,
  Center,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Controller, useForm } from "react-hook-form";
import { RegistrationSchema } from "@/jsx/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import RegistrationSchemaProps from "@/jsx/schema";
import { useEffect } from "react";
import { Toaster, toaster } from "@/components/ui/toaster";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    control,
    reset,
  } = useForm<RegistrationSchemaProps>({
    resolver: zodResolver(RegistrationSchema),
  });
  const defaultFormValues = {
    name: "",
    email: "",
    gender: [],
  };
  const callSuccessToast = () => {
    toaster.create({
      title: "Submitted Successfully!",
      type: "success",
    });
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      callSuccessToast();
      reset(defaultFormValues);
    }
    console.log("in useeffect " + isSubmitSuccessful);
  }, [isSubmitSuccessful]);
  const submitForm = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <>
      <Center my={{ base: "10" }}>
        <Box>
          <Card.Root width="320px">
            <CardBody>
              <form onSubmit={submitForm}>
                <Fieldset.Root size="lg" maxW="md">
                  <Stack>
                    <Fieldset.Legend>Registration details</Fieldset.Legend>
                    <Fieldset.HelperText>
                      Please provide your details below.
                    </Fieldset.HelperText>
                  </Stack>

                  <Fieldset.Content>
                    <Field
                      label="Name"
                      invalid={!!errors.name}
                      errorText={errors.name?.message}
                    >
                      <Input
                        {...register("name", { required: "Name is required" })}
                      />
                    </Field>

                    <Field
                      label="Email address"
                      invalid={!!errors.email}
                      errorText={errors.email?.message}
                    >
                      <Input
                        {...register("email", {
                          required: "Email is required",
                        })}
                      />
                    </Field>

                    <Field
                      invalid={!!errors.gender}
                      errorText={errors.gender?.message}
                    >
                      <Controller
                        control={control}
                        name="gender"
                        render={({ field }) => (
                          <SelectRoot
                            name={field.name}
                            value={field.value}
                            collection={genderList}
                            onValueChange={({ value }) => field.onChange(value)}
                            onInteractOutside={() => field.onBlur()}
                            required={true}
                          >
                            <SelectLabel>Gender</SelectLabel>
                            <SelectTrigger>
                              <SelectValueText placeholder="Gender" />
                            </SelectTrigger>
                            <SelectContent>
                              {genderList.items.map((gender) => (
                                <SelectItem item={gender} key={gender.value}>
                                  {gender.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </SelectRoot>
                        )}
                      />
                    </Field>
                  </Fieldset.Content>

                  <Button type="submit" alignSelf="flex-start">
                    Submit
                  </Button>
                </Fieldset.Root>
              </form>
            </CardBody>
          </Card.Root>
        </Box>
      </Center>
      <Toaster />
    </>
  );
}
const genderList = createListCollection({
  items: [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Others", value: "others" },
  ],
});
