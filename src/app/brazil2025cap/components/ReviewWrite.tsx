'use client';
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import type { Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { FaStar } from 'react-icons/fa';

const formSchema = z.object({
  name: z.string().min(3, 'Nama minimal 3 karakter'),
  productName: z.string().min(3, 'Nama produk minimal 3 karakter'),
  rating: z.coerce.number().min(1).max(5),
  reviewDesc: z.string(),
});

type FormData = z.infer<typeof formSchema>;

const ReviewWrite = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema) as Resolver<FormData, any>,
    defaultValues: {
      name: '',
      productName: '',
      rating: 5,
      reviewDesc: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      await axios.post('https://tubularrake-us.backendless.app/api/data/Reviews', data);
      toast.success('Review Added');
      form.reset();
      window.location.reload();
    } catch (error) {
      toast.error('Failed to submit review');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4">
        <div className="border-t border-b border-gray-300 py-8">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            Already got it? Let us know what you think!
          </h2>

          <form id="form-write" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              {/* Name */}
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                    <Input
                      {...field}
                      id="name"
                      placeholder="Your full name"
                      className="bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#db0a40] rounded-md"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              {/* Product Name */}
              <Controller
                name="productName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="productName">Product Name</FieldLabel>
                    <Input
                      {...field}
                      id="productName"
                      placeholder="Product name"
                      className="bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#db0a40] rounded-md"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              {/* Rating (Stars) */}
              <Controller
                name="rating"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="rating">Rating</FieldLabel>
                    <div className="flex items-center gap-2 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          size={28}
                          className={`cursor-pointer transition-colors ${
                            star <= field.value ? 'text-yellow-400' : 'text-gray-300'
                          } hover:text-yellow-500`}
                          onClick={() => field.onChange(star)}
                        />
                      ))}
                    </div>
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              {/* Description */}
              <Controller
                name="reviewDesc"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="reviewDesc">Description</FieldLabel>
                    <Textarea
                      {...field}
                      id="reviewDesc"
                      placeholder="Write your review here..."
                      className="bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#db0a40] rounded-md h-28"
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              {/* Submit */}
              <Field className="mt-4">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-fit bg-[#db0a40] hover:bg-[#ff003c] text-white font-semibold py-3 rounded-md shadow-md hover:shadow-lg transition-all duration-200"
                >
                  {isLoading ? 'Submitting...' : 'Submit Review'}
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewWrite;
