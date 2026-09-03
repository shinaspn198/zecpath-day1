import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Day29() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            DAY 29 • SUBMISSION
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Conversation Flow Design
          </h1>

          <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto mb-8">
            Designing dynamic AI conversation logic for handling silence,
            confusion, repeated answers, follow-up questions, retries,
            and conversation failures during screening calls.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/day29_completed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
            >
              View Completion PDF
            </a>

            <a
              href="#implementation"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Explore Implementation
            </a>
          </div>
        </div>
      </section>

      {/* DOCUMENTATION PDF */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-10">
              <span className="text-indigo-600 font-semibold">
                DAY 29 DOCUMENTATION
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                AI Conversation Flow Documentation
              </h2>

              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Complete documentation of the AI conversation state machine,
                decision tree, issue handling, fallback questions, and retry
                logic implemented during Day 29.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="/day29_completed.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-indigo-200 rounded-xl p-6 hover:shadow-md hover:border-indigo-400 transition"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  View PDF
                </h3>

                <p className="text-gray-600">
                  Open the complete Day 29 implementation and validation
                  documentation.
                </p>
              </a>

              <a
                href="/day29_completed.pdf"
                download
                className="border border-purple-200 rounded-xl p-6 hover:shadow-md hover:border-purple-400 transition"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Download PDF
                </h3>

                <p className="text-gray-600">
                  Download the completed Day 29 documentation report.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION */}
      <section id="implementation" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-semibold">
              IMPLEMENTATION
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Day 29 Conversation Flow Implementation
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              The AI screening conversation was structured into independent
              modules for state management, decision making, issue handling,
              follow-up questions, and failure recovery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* STEP 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-indigo-600">
              <div className="text-indigo-600 font-bold text-sm mb-3">
                STEP 1
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Conversation State Schema
              </h3>

              <p className="text-gray-600 mb-4">
                Defines the current state of an AI screening conversation,
                including question information, previous answers, issue
                counters, retries, follow-up status, and errors.
              </p>

              <code className="text-sm text-indigo-700">
                conversation_state_schema.py
              </code>
            </div>

            {/* STEP 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-purple-600">
              <div className="text-purple-600 font-bold text-sm mb-3">
                STEP 2
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AI Call Decision Tree
              </h3>

              <p className="text-gray-600 mb-4">
                Determines the next conversation action based on the current
                state, including silence, confusion, repeated answers,
                follow-ups, failures, and completion.
              </p>

              <code className="text-sm text-purple-700">
                conversation_decision_tree.py
              </code>
            </div>

            {/* STEP 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-600">
              <div className="text-blue-600 font-bold text-sm mb-3">
                STEP 3
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Silence Handling
              </h3>

              <p className="text-gray-600 mb-4">
                Handles progressive silence events by waiting for a response,
                offering to repeat the question, and eventually moving to the
                next question.
              </p>

              <code className="text-sm text-blue-700">
                silence_handler.py
              </code>
            </div>

            {/* STEP 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-600">
              <div className="text-green-600 font-bold text-sm mb-3">
                STEP 4
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Confusion & Repeated Answers
              </h3>

              <p className="text-gray-600 mb-4">
                Provides clarification and rephrasing for confused candidates
                and requests additional details or different examples for
                repeated answers.
              </p>

              <code className="text-sm text-green-700">
                response_issue_handler.py
              </code>
            </div>

            {/* STEP 5 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-orange-600">
              <div className="text-orange-600 font-bold text-sm mb-3">
                STEP 5
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fallback & Follow-up Questions
              </h3>

              <p className="text-gray-600 mb-4">
                Generates category-based fallback questions and triggers
                follow-up questions when additional candidate information is
                required.
              </p>

              <code className="text-sm text-orange-700">
                follow_up_handler.py
              </code>
            </div>

            {/* STEP 6 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-red-600">
              <div className="text-red-600 font-bold text-sm mb-3">
                STEP 6
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Failure & Retry Logic
              </h3>

              <p className="text-gray-600 mb-4">
                Provides polite retry responses and ends the conversation
                after the configured retry limit is exceeded.
              </p>

              <code className="text-sm text-red-700">
                failure_retry_handler.py
              </code>
            </div>

          </div>
        </div>
      </section>

      {/* CONVERSATION ARCHITECTURE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-semibold">
              CONVERSATION ARCHITECTURE
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              AI Conversation State Machine
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              The conversation flow evaluates the current state and routes the
              interaction to the appropriate handling module.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col items-center gap-4">

              <div className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold">
                Conversation State
              </div>

              <div className="text-gray-400 text-2xl">↓</div>

              <div className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold">
                Determine Next Action
              </div>

              <div className="text-gray-400 text-2xl">↓</div>

              <div className="grid md:grid-cols-3 gap-4 w-full">

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
                  <h3 className="font-bold text-blue-800">
                    Silence
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Wait → Repeat → Move Forward
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
                  <h3 className="font-bold text-green-800">
                    Confusion
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Clarify → Rephrase → Move Forward
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 text-center">
                  <h3 className="font-bold text-orange-800">
                    Repeated Answer
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Details → Example → Move Forward
                  </p>
                </div>

              </div>

              <div className="grid md:grid-cols-3 gap-4 w-full">

                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 text-center">
                  <h3 className="font-bold text-indigo-800">
                    Follow-up
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Ask category-based fallback question
                  </p>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-center">
                  <h3 className="font-bold text-red-800">
                    Failure
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Retry → End after limit
                  </p>
                </div>

                <div className="bg-gray-100 border border-gray-300 rounded-xl p-5 text-center">
                  <h3 className="font-bold text-gray-800">
                    Completed
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    End conversation
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* HANDLING LOGIC */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-semibold">
              RESPONSE HANDLING
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Dynamic Conversation Behaviour
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Silence
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>• First silence → Wait for response</li>
                <li>• Second silence → Offer question repeat</li>
                <li>• Further silence → Move to next question</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Confusion
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>• First confusion → Clarify question</li>
                <li>• Second confusion → Rephrase question</li>
                <li>• Further confusion → Move forward</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Repeated Answers
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li>• First repetition → Request more details</li>
                <li>• Second repetition → Request another example</li>
                <li>• Further repetition → Move forward</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* FALLBACK QUESTIONS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <span className="text-indigo-600 font-semibold">
              FOLLOW-UP SYSTEM
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Fallback Question Categories
            </h2>

            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Follow-up questions are selected according to the conversation
              category when additional information is required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-indigo-700 mb-3">
                Technical
              </h3>
              <p className="text-gray-600 text-sm">
                Could you explain your technical experience with a simple
                example?
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-purple-700 mb-3">
                Experience
              </h3>
              <p className="text-gray-600 text-sm">
                Could you describe one project or experience related to this?
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-blue-700 mb-3">
                Skills
              </h3>
              <p className="text-gray-600 text-sm">
                Could you give an example of how you used this skill?
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-green-700 mb-3">
                General
              </h3>
              <p className="text-gray-600 text-sm">
                Could you provide a little more information about your answer?
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAILURE & RETRY */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-10">
            <span className="text-red-600 font-semibold">
              ERROR HANDLING
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Polite Failure & Retry Logic
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <div className="grid md:grid-cols-3 gap-6 text-center">

              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  1
                </div>

                <h3 className="font-bold text-gray-900">
                  First Failure
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  Retry the conversation response.
                </p>
              </div>

              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  2
                </div>

                <h3 className="font-bold text-gray-900">
                  Second Failure
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  Allow another retry attempt.
                </p>
              </div>

              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  3
                </div>

                <h3 className="font-bold text-gray-900">
                  Retry Limit
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  End the conversation politely.
                </p>
              </div>

            </div>

            <div className="mt-8 bg-gray-50 rounded-xl p-6 text-center">
              <p className="text-gray-700">
                The system uses a maximum retry limit of{" "}
                <strong>2 retries</strong> before ending the conversation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* COMPLETE FLOW */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <span className="text-indigo-600 font-semibold">
              COMPLETE FLOW
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Conversation Processing Pipeline
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <div className="flex flex-col md:flex-row items-center justify-center gap-4">

              <div className="bg-indigo-600 text-white px-6 py-4 rounded-xl font-semibold text-center">
                Conversation State
              </div>

              <div className="text-gray-400 text-2xl">
                →
              </div>

              <div className="bg-purple-600 text-white px-6 py-4 rounded-xl font-semibold text-center">
                Decision Tree
              </div>

              <div className="text-gray-400 text-2xl">
                →
              </div>

              <div className="bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold text-center">
                Issue / Follow-up Handler
              </div>

              <div className="text-gray-400 text-2xl">
                →
              </div>

              <div className="bg-green-600 text-white px-6 py-4 rounded-xl font-semibold text-center">
                Next Action
              </div>

            </div>

            <div className="mt-10 text-center text-gray-600">
              The complete flow is implemented through{" "}
              <strong>conversation_flow.py</strong>, which connects the
              decision tree with all conversation handling modules.
            </div>

          </div>
        </div>
      </section>

      {/* VALIDATION */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold">
              VALIDATION
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Day 29 Final Validation
            </h2>

            <p className="text-gray-600 mt-4">
              All eight Day 29 implementation steps were completed and
              validated successfully.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">

            <table className="w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 font-bold text-gray-900">
                    Step
                  </th>

                  <th className="px-6 py-4 font-bold text-gray-900">
                    Implementation
                  </th>

                  <th className="px-6 py-4 font-bold text-gray-900">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-t">
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4">
                    Conversation State Schema
                  </td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    PASSED
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="px-6 py-4">2</td>
                  <td className="px-6 py-4">
                    AI Call Decision Tree
                  </td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    PASSED
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="px-6 py-4">3</td>
                  <td className="px-6 py-4">
                    Silence Handling
                  </td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    PASSED
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="px-6 py-4">4</td>
                  <td className="px-6 py-4">
                    Confusion & Repeated Answer Handling
                  </td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    PASSED
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="px-6 py-4">5</td>
                  <td className="px-6 py-4">
                    Fallback & Follow-up Questions
                  </td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    PASSED
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="px-6 py-4">6</td>
                  <td className="px-6 py-4">
                    Polite Failure & Retry Logic
                  </td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    PASSED
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="px-6 py-4">7</td>
                  <td className="px-6 py-4">
                    Complete Conversation Flow
                  </td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    PASSED
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="px-6 py-4">8</td>
                  <td className="px-6 py-4">
                    Final Validation Testing
                  </td>
                  <td className="px-6 py-4 text-green-600 font-semibold">
                    PASSED
                  </td>
                </tr>

              </tbody>
            </table>

          </div>

        </div>
      </section>

      {/* PROJECT FILES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <span className="text-indigo-600 font-semibold">
              PROJECT FILES
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              Day 29 Backend Modules
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {[
              "conversation_state_schema.py",
              "conversation_decision_tree.py",
              "silence_handler.py",
              "response_issue_handler.py",
              "follow_up_handler.py",
              "failure_retry_handler.py",
              "conversation_flow.py",
              "test_day29_final.py",
            ].map((file) => (
              <div
                key={file}
                className="bg-white rounded-xl shadow-sm border p-5"
              >
                <code className="text-indigo-700 text-sm">
                  interview_ai/{file}
                </code>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* COMPLETION */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            DAY 29 COMPLETE
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            AI Conversation Flow Design
          </h2>

          <p className="text-indigo-100 text-lg mb-8">
            The Day 29 AI conversation flow has been implemented and
            successfully validated, including conversation state management,
            decision-tree routing, silence handling, confusion handling,
            repeated-answer handling, fallback questions, follow-up triggers,
            and polite failure and retry logic.
          </p>

          <a
            href="/day29_completed.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition"
          >
            View Day 29 Completion PDF
          </a>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Day29;
