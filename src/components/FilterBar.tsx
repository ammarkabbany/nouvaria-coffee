"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Check, ChevronDown, Coffee, Globe, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterBarProps {
  onFilterChange?: (filterType: string, selectedOptions: string[]) => void;
}

const FilterBar = ({ onFilterChange = () => {} }: FilterBarProps) => {
  // Default filter options
  const roastLevels: FilterOption[] = [
    { id: "light", label: "Light" },
    { id: "medium", label: "Medium" },
    { id: "dark", label: "Dark" },
    { id: "espresso", label: "Espresso" },
  ];

  const origins: FilterOption[] = [
    { id: "ethiopia", label: "Ethiopia" },
    { id: "colombia", label: "Colombia" },
    { id: "brazil", label: "Brazil" },
    { id: "guatemala", label: "Guatemala" },
    { id: "costa-rica", label: "Costa Rica" },
  ];

  const flavorProfiles: FilterOption[] = [
    { id: "fruity", label: "Fruity" },
    { id: "nutty", label: "Nutty" },
    { id: "chocolatey", label: "Chocolatey" },
    { id: "floral", label: "Floral" },
    { id: "spicy", label: "Spicy" },
    { id: "caramel", label: "Caramel" },
  ];

  // State for selected filters
  const [selectedRoasts, setSelectedRoasts] = useState<string[]>([]);
  const [selectedOrigins, setSelectedOrigins] = useState<string[]>([]);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);

  // Handle filter selection
  const handleFilterSelect = (
    filterType: "roast" | "origin" | "flavor",
    optionId: string,
  ) => {
    let updatedSelection: string[] = [];

    if (filterType === "roast") {
      updatedSelection = selectedRoasts.includes(optionId)
        ? selectedRoasts.filter((id) => id !== optionId)
        : [...selectedRoasts, optionId];
      setSelectedRoasts(updatedSelection);
      onFilterChange("roast", updatedSelection);
    } else if (filterType === "origin") {
      updatedSelection = selectedOrigins.includes(optionId)
        ? selectedOrigins.filter((id) => id !== optionId)
        : [...selectedOrigins, optionId];
      setSelectedOrigins(updatedSelection);
      onFilterChange("origin", updatedSelection);
    } else if (filterType === "flavor") {
      updatedSelection = selectedFlavors.includes(optionId)
        ? selectedFlavors.filter((id) => id !== optionId)
        : [...selectedFlavors, optionId];
      setSelectedFlavors(updatedSelection);
      onFilterChange("flavor", updatedSelection);
    }
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedRoasts([]);
    setSelectedOrigins([]);
    setSelectedFlavors([]);
    // Notify parent component that all filters are cleared
    onFilterChange("roast", []);
    onFilterChange("origin", []);
    onFilterChange("flavor", []);
  };

  // Count total active filters
  const totalActiveFilters =
    selectedRoasts.length + selectedOrigins.length + selectedFlavors.length;

  return (
    <div className="w-full bg-white dark:bg-gray-900 shadow-sm rounded-lg p-2 flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        {/* Roast Level Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "flex items-center gap-1 h-9",
                selectedRoasts.length > 0 &&
                  "bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400",
              )}
            >
              <Coffee className="h-4 w-4" />
              <span>Roast</span>
              {selectedRoasts.length > 0 && (
                <span className="ml-1 rounded-full bg-amber-100 dark:bg-amber-800 w-5 h-5 text-xs flex items-center justify-center">
                  {selectedRoasts.length}
                </span>
              )}
              <ChevronDown className="h-3 w-3 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-2" align="start" sideOffset={8}>
            <div className="space-y-1">
              {roastLevels.map((option) => {
                const isSelected = selectedRoasts.includes(option.id);
                return (
                  <Button
                    key={option.id}
                    variant="ghost"
                    className={cn(
                      "w-full justify-start font-normal",
                      isSelected &&
                        "bg-amber-50 text-amber-900 dark:bg-amber-900/20 dark:text-amber-400",
                    )}
                    onClick={() => handleFilterSelect("roast", option.id)}
                  >
                    <div className="flex items-center gap-2">
                      {isSelected ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <div className="h-4 w-4" />
                      )}
                      {option.label}
                    </div>
                  </Button>
                );
              })}
            </div>
          </PopoverContent>
        </Popover>

        {/* Origin Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "flex items-center gap-1 h-9",
                selectedOrigins.length > 0 &&
                  "bg-green-50 border-green-200 text-green-900 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400",
              )}
            >
              <Globe className="h-4 w-4" />
              <span>Origin</span>
              {selectedOrigins.length > 0 && (
                <span className="ml-1 rounded-full bg-green-100 dark:bg-green-800 w-5 h-5 text-xs flex items-center justify-center">
                  {selectedOrigins.length}
                </span>
              )}
              <ChevronDown className="h-3 w-3 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-2" align="start" sideOffset={8}>
            <div className="space-y-1">
              {origins.map((option) => {
                const isSelected = selectedOrigins.includes(option.id);
                return (
                  <Button
                    key={option.id}
                    variant="ghost"
                    className={cn(
                      "w-full justify-start font-normal",
                      isSelected &&
                        "bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-400",
                    )}
                    onClick={() => handleFilterSelect("origin", option.id)}
                  >
                    <div className="flex items-center gap-2">
                      {isSelected ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <div className="h-4 w-4" />
                      )}
                      {option.label}
                    </div>
                  </Button>
                );
              })}
            </div>
          </PopoverContent>
        </Popover>

        {/* Flavor Profile Filter */}
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "flex items-center gap-1 h-9",
                selectedFlavors.length > 0 &&
                  "bg-purple-50 border-purple-200 text-purple-900 dark:bg-purple-900/20 dark:border-purple-800 dark:text-purple-400",
              )}
            >
              <Sparkles className="h-4 w-4" />
              <span>Flavor</span>
              {selectedFlavors.length > 0 && (
                <span className="ml-1 rounded-full bg-purple-100 dark:bg-purple-800 w-5 h-5 text-xs flex items-center justify-center">
                  {selectedFlavors.length}
                </span>
              )}
              <ChevronDown className="h-3 w-3 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-2" align="start" sideOffset={8}>
            <div className="space-y-1">
              {flavorProfiles.map((option) => {
                const isSelected = selectedFlavors.includes(option.id);
                return (
                  <Button
                    key={option.id}
                    variant="ghost"
                    className={cn(
                      "w-full justify-start font-normal",
                      isSelected &&
                        "bg-purple-50 text-purple-900 dark:bg-purple-900/20 dark:text-purple-400",
                    )}
                    onClick={() => handleFilterSelect("flavor", option.id)}
                  >
                    <div className="flex items-center gap-2">
                      {isSelected ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <div className="h-4 w-4" />
                      )}
                      {option.label}
                    </div>
                  </Button>
                );
              })}
            </div>
          </PopoverContent>
        </Popover>

        {/* Active Filters */}
        <AnimatePresence>
          {totalActiveFilters > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex items-center gap-1"
            >
              <Button
                variant="ghost"
                size="sm"
                className="h-9 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                onClick={clearAllFilters}
              >
                <X className="h-3.5 w-3.5 mr-1" />
                Clear all
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Results count */}
      <div className="text-sm text-gray-500 dark:text-gray-400">
        <span className="font-medium">24</span> products
      </div>
    </div>
  );
};

export default FilterBar;
