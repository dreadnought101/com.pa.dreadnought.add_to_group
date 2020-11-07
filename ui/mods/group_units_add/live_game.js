model.AddToGroup = function() {
  if (!model.selection())
    return;

  api.unit.selfDestruct();
}
