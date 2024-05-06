import { AnimatePresence, MotiView } from "moti";
import { MotiPressable } from "moti/interactions";

import { Dimensions } from "react-native";
import { Title, Value } from "../text";
import { PrimaryButton } from "../button";

const DRAWER_PADDING = 32;

const Drawer = ({ offsetY = 200, children, visible, onBackdropPress }) => {
  const { width, height } = Dimensions.get("screen");

  return (
    <AnimatePresence>
      {visible && (
        <>
          <MotiView
            key="drawer-backdrop"
            from={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.7,
            }}
            exit={{
              opacity: 0,
            }}
            style={{
              position: "absolute",
              width,
              height,
              backgroundColor: "#000000",
            }}
          >
            <MotiPressable
              onPress={onBackdropPress}
              style={{ position: "absolute", width, height }}
            />
          </MotiView>

          <MotiView
            key="drawer-content"
            from={{
              translateY: height,
            }}
            animate={{
              translateY: offsetY,
            }}
            exit={{
              translateY: height,
            }}
            transition={{
              type: "timing",
            }}
            style={{
              backgroundColor: "#fff",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              padding: DRAWER_PADDING,
              height: height - offsetY - DRAWER_PADDING / 2,
              width: width,
              position: "absolute",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {children}
          </MotiView>
        </>
      )}
    </AnimatePresence>
  );
};

const DrawerValue = ({ visible, onClose, value, onValueChange }) => {
  return (
    <Drawer visible={visible} onBackdropPress={onClose}>
      <Title text="Total da conta" />

      <Value
        value={value}
        size="large"
        editable
        onValueChange={onValueChange}
      />

      <PrimaryButton label="Alterar Valor" onPress={onClose} />
    </Drawer>
  );
};

Drawer.Value = DrawerValue;

export default Drawer;
