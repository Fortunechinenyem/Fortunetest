const API_BASE_URL = "https://api.example.com";

export async function fetchSalesVolumeData(): Promise<any[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/sales-volume`);
    if (!response.ok) {
      throw new Error("Failed to fetch sales volume data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      error.message || "An error occurred while fetching sales volume data"
    );
  }
}
