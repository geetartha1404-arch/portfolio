# Vercel React Native Skills

This skill provides comprehensive guidelines and best practices for developing high-performance React Native applications, specifically tailored for Vercel's ecosystem and AI agents.

## Core Principles

- **Performance First**: Prioritize list virtualization, image optimization, and bridge-less communication.
- **Platform Awareness**: Handle iOS and Android specificities (Safe Areas, touch targets, native modules).
- **Responsive Layouts**: Use Flexbox and percentage-based sizing over hardcoded pixels.
- **Accessibility**: Ensure every interactive element is reachable via voiceover and keyboard.

## Key Rules

### List Performance
- Use `FlashList` for large data sets.
- Implement `getItemLayout` for fixed-height items.
- Avoid anonymous functions in `renderItem`.

### Layout & Styling
- Use `SafeAreView` for notch compatibility.
- Leverage `Platform.select` for OS-specific styles.
- Prefer `StyleSheet.create` for performance over inline styles.

### Images
- Use `react-native-fast-image` for aggressive caching.
- Specify dimensions to avoid layout shifts.

### Interactions
- Use `Pressable` over `TouchableOpacity` for modern feedback control.
- Ensure hit targets are at least 44x44 DPI.

## Full Document
For the complete guide with all rules expanded, refer to the `AGENTS.md` file in this repository.
