import { z, ZodTypeAny } from "zod";

const required = (name: string) => `${name} is required.`;
const messages = (name: string) => ({
  required_error: required(name),
  invalid_type_error: `Please enter a valid ${name}.`,
});

export class V {
  public static string(name: string): z.ZodString {
    return z.string(messages(name)).trim().min(1, required(name));
  }

  public static nativeEnum<TEnum extends Record<string, string>>(
    name: string,
    _enum: TEnum,
  ): z.ZodNativeEnum<TEnum> {
    return z.nativeEnum(_enum, messages(name));
  }

  public static array<TType extends ZodTypeAny>(
    name: string,
    items: TType,
  ): z.ZodArray<TType> {
    return z.array(items).min(1, required(name));
  }
}
