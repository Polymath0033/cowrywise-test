import { ref, onMounted, onUnmounted, type Ref } from "vue";

export function useGrid(
  gridSelector: string,
  gridContainer: Ref<HTMLElement | null>
) {
  const itemsPerRow: Ref<number> = ref(0);
  const calculateItemsPerRow = () => {
    const container = gridContainer.value;
    if (container) {
      const firstItem = container.querySelector(gridSelector);
      if (firstItem) {
        // Get container width and item width
        const containerWidth = container.offsetWidth;
        const itemWidth = (firstItem as HTMLElement).offsetWidth;
        itemsPerRow.value = Math.floor(containerWidth / itemWidth);
      }
    }
  };
  const getHeightForItem = (index: number) => {
    if (itemsPerRow.value === 4) {
      if (index % 4 === 0) return 250;
      if (index % 4 === 1) return 300;
      if (index % 4 === 2) return 280;
      return 270;
    } else if (itemsPerRow.value === 3) {
      if (index % 3 === 0) return 250;
      if (index % 3 === 1) return 300;
      return 270;
    } else if (itemsPerRow.value === 2) {
      return index % 2 === 0 ? 250 : 300; // 250 for odds, 300 for evens
    }
    return 250; // Default height
  };
  onMounted(() => {
    // Observe changes in the container size
    const resizeObserver = new ResizeObserver(calculateItemsPerRow);
    if (gridContainer.value !== null)
      resizeObserver.observe(gridContainer.value as HTMLElement);

    // Recalculate items on mount
    calculateItemsPerRow();
    onUnmounted(() => {
      resizeObserver.disconnect();
    });
  });

  return {
    itemsPerRow,
    getHeightForItem
  };
}
