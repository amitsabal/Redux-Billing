//An action creator, selectBook , just returns an action
export function selectItemBill(items) {
  return {
    type: "SELECTED_ITEMS_BILL",
    payload:items
  }
};
