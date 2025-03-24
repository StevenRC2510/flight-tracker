import { faker } from "@faker-js/faker";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import AirportList from "@/features/airports/ui/airportList";
import { Airport, AirportsResponse } from "@/features/airports/domain/airport";

export const generateAirport = (): Airport => ({
  id: faker.string.uuid(),
  airport_name: faker.company.name(),
  iata_code: faker.string.alpha({ length: 3, casing: "upper" }),
  icao_code: faker.string.alpha({ length: 4, casing: "upper" }),
  latitude: faker.location.latitude().toString(),
  longitude: faker.location.longitude().toString(),
  geoname_id: faker.number.int({ min: 10000, max: 999999 }).toString(),
  timezone: faker.location.timeZone(),
  gmt: faker.number.int({ min: -12, max: 14 }).toString(),
  phone_number: +faker.phone.number(),
  country_name: faker.location.country(),
  country_iso2: faker.location.countryCode("alpha-2"),
  city_iata_code: faker.location.city().slice(0, 3).toUpperCase(),
});

const mockAirports = Array.from({ length: 10 }, generateAirport);

const mockInitialData: AirportsResponse = {
  data: mockAirports,
  pagination: {
    limit: 5,
    total: 10,
    count: 1,
    offset: 5,
  },
};

let mockUseAirportStore: jest.Mock;

jest.mock("@/features/airports/state/airportStore", () => ({
  useAirportStore: (...args: unknown[]) => mockUseAirportStore(...args),
}));

describe("-> AirportList Component", () => {
  beforeEach(() => {
    mockUseAirportStore = jest.fn().mockReturnValue({
      airports: mockAirports,
      currentPage: 1,
      loading: false,
      totalPages: 2,
      setInitialData: jest.fn(),
      fetchAirports: jest.fn(),
      setCurrentPage: jest.fn(),
    });
  });

  it("should render initial airports correctly", () => {
    render(<AirportList initialAirports={mockInitialData} searchInitial="" />);

    mockAirports.slice(0, 5).forEach((airport) => {
      expect(screen.getByText(airport.airport_name)).toBeInTheDocument();
    });
  });

  it("should filter airports by name when searching", async () => {
    render(<AirportList initialAirports={mockInitialData} searchInitial="" />);

    const searchInput = screen.getByPlaceholderText(/Buscar aeropuertos/i);
    const searchButton = screen.getByRole("button", { name: /Buscar/i });

    const searchTerm = mockAirports[0].airport_name.slice(0, 3);
    fireEvent.change(searchInput, { target: { value: searchTerm } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(
        screen.getByText(mockAirports[0].airport_name)
      ).toBeInTheDocument();

      mockAirports.slice(1).forEach((airport) => {
        expect(
          screen.queryByText(airport.airport_name)
        ).not.toBeInTheDocument();
      });
    });
  });

  it("should fetch all airports when clearing search input", async () => {
    const fetchAirportsMock = jest.fn();
    mockUseAirportStore.mockReturnValue({
      airports: mockAirports,
      currentPage: 1,
      loading: false,
      totalPages: 2,
      setInitialData: jest.fn(),
      fetchAirports: fetchAirportsMock,
      setCurrentPage: jest.fn(),
    });

    render(<AirportList initialAirports={mockInitialData} searchInitial="" />);

    const searchInput = screen.getByPlaceholderText(/Buscar aeropuertos/i);
    const searchButton = screen.getByRole("button", { name: /Buscar/i });

    fireEvent.change(searchInput, { target: { value: "" } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(fetchAirportsMock).toHaveBeenCalledWith({ page: 1 });
    });
  });

  it("should change page correctly when paginating", async () => {
    const fetchAirportsMock = jest.fn();
    mockUseAirportStore.mockReturnValue({
      airports: mockAirports,
      currentPage: 1,
      loading: false,
      totalPages: 2,
      setInitialData: jest.fn(),
      fetchAirports: fetchAirportsMock,
      setCurrentPage: jest.fn(),
    });

    render(<AirportList initialAirports={mockInitialData} searchInitial="" />);

    const nextButton = screen.getByRole("button", { name: /Siguiente/i });

    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(fetchAirportsMock).toHaveBeenCalledWith({ page: 2 });
    });
  });
});
