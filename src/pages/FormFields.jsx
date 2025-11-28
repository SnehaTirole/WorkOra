import React from "react";

export default function FormFields({
  formData,
  handleChange,
  error,
  loading,
  handleSubmit,
  role
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* First & Last Name */}
      <div className="flex gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg"
        />
      </div>

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder={role === "client" ? "Work email address" : "Email"}
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Password (8+ characters)"
        value={formData.password}
        onChange={handleChange}
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Country */}
      <input
        type="text"
        name="country"
        placeholder="Country (e.g., India)"
        value={formData.country}
        onChange={handleChange}
        className="w-full px-4 py-3 border rounded-lg"
      />

      {/* Error */}
      {error && (
        <p className="p-3 bg-red-100 text-red-700 rounded">{error}</p>
      )}

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-green-600 text-white rounded-lg"
      >
        {loading ? "Creating..." : "Create My Account"}
      </button>
    </form>
  );
}
