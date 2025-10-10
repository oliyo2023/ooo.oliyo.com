Memory Bank System Operations:

**Task Execution Flow:**
1. **Read Memory Bank:** At the start of EVERY task, read ALL memory bank files located in `.kilocode/rules/memory-bank`.
   - If folder/files are missing or empty, warn the user about potential issues and suggest initialization.
   - Prefix response with `[Memory Bank: Active]` or `[Memory Bank: Missing]`.
   - Briefly summarize project understanding.
2. **Match Documented Task:** If the current task matches a documented task in `tasks.md`, mention it and follow the documented workflow.
3. **Suggest Storing Task:** If a task is repetitive and might be needed again, prompt the user: "Would you like me to add this task to the memory bank for future reference?"
4. **Update Context:** At the end of a completed task, update `context.md`.
   - If changes are significant, suggest: "Would you like me to update memory bank to reflect these changes?"
   - Do not suggest updates for minor changes.

**Context Window Management:**
When the context window fills up during an extended session:
1. Suggest updating the memory bank to preserve the current state.
2. Recommend starting a fresh conversation/task.
3. In the new conversation, automatically load memory bank files for continuity.

**Memory Reset Handling:**
- After every memory reset, the system begins fresh.
- The Memory Bank is the sole link to previous work and must be maintained with precision and clarity.

**Inconsistency Handling:**
- If inconsistencies are detected between memory bank files, prioritize `brief.md` and note discrepancies to the user.

**Core Configuration:**
- Memory Bank files are stored as standard markdown documents.
- Location: `.kilocode/rules/memory-bank` folder.
- `tasks.md`: Stores documented repetitive tasks.
- `context.md`: Stores current task context.