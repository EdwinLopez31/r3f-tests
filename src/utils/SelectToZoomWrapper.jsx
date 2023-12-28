import { useBounds } from "@react-three/drei";

export function SelectToZoomWrapper({ children }) {
  const api = useBounds();
  return (
    <group
      onClick={(e) => (
        e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit()
      )}
      onPointerMissed={(e) => e.button === 0 && api.refresh()}
    >
      {children}
    </group>
  );
}
